
import * as firebase from 'firebase'
export default {
  state: {
    user: null
  },
  mutations: {
    registerUserForExhibit (state, payload) {
      const id = payload.id
      if (state.user.registeredExhibit.findIndex(exhibit => exhibit.id === id) >= 0) {
        return
      }
      state.user.registeredExhibit.push(id)
      state.user.fbkeys[id] = payload.fbkey
    },
    unregisterUserFromExhibit (state, payload) {
      const registeredExhibit = state.user.registeredExhibit
      registeredExhibit.splice(registeredExhibit.findIndex(exhibit => exhibit.id === payload), 1)
      Reflect.deleteProperty(state.user.fbkeys, payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    registerUserForExhibit ({commit, getters}, payload) {
      commit('setLoading', true)
      const user = getters.user
      firebase.database().ref('/users/' + user.id).child('/registration/')
        .push(payload)
        .then(data => {
          commit('setLoading', false)
          commit('registerUserForExhibit', { id: payload, fbkey: data.key })
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    unregisterUserFromExhibit ({commit, getters}, payload) {
      commit('setLoading', true)
      const user = getters.user
      if (!user.fbkeys) {
        return
      }
      const fbkey = user.fbkeys[payload]
      firebase.database().ref('/users/' + user.id + '/registration/').child(fbkey)
        .remove()
        .then(() => {
          commit('setLoading', false)
          commit('unregisterUserFromExhibit', payload)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredExhibit: [],
              fbkeys: {}
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredExhibit: [],
              fbkeys: {}
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {
        id: payload.uid,
        registeredExhibit: [],
        fbkeys: {}
      })
    },
    fetchUserData ({commit, getters}) {
      commit('setLoading', true)
      firebase.database().ref('/users/' + getters.user.id + '/registration/').once('value')
        .then(data => {
          const dataPairs = data.val()
          let registeredExhibit = []
          let swappedPairs = {}
          for (let Key in dataPairs) {
            registeredExhibit.push(dataPairs[Key])
            swappedPairs[dataPairs[Key]] = Key
          }
          const updatedUser = {
            id: getters.user.id,
            registeredExhibit: registeredExhibit,
            fbkeys: swappedPairs
          }
          commit('setLoading', false)
          commit('setUser', updatedUser)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    logOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}

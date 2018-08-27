import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    loadedExhibits: [
      {
        imageUrl: 'https://www.didierruefworkshops.com/wp-content/gallery/horizonte-zingst-2014/004-Germany-Zingst-Horizonte-Zingst-Umweltfotofestival-Photo-exhibit-Recycle-RUEF-2014.jpg',
        id: 'wqwqq',
        title: 'Germany Exhibit',
        date: '08/16/2018 ',
        time: '10:00',
        location: 'Germany',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...'
      },
      {
        imageUrl: 'http://www.bienvenidotours.com/uploads/1/3/5/3/13538651/9964551_orig.jpg',
        id: 'wqwqq12',
        title: 'Philippines Exhibit',
        date: '08/16/2018 ',
        time: '10:00',
        location: 'Philippines',
        description: 'omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam...'
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedExhibits (state, payload) {
      state.loadedExhibits = payload
    },
    createExhibit (state, payload) {
      state.loadedExhibits.push(payload)
    },
    updateExhibit (state, payload) {
      const exhibit = state.loadedExhibits.find(exhibit => {
        return exhibit.id === payload.id
      })
      if (payload.title) {
        exhibit.title = payload.title
      }
      if (payload.description) {
        exhibit.description = payload.description
      }
      if (payload.date) {
        exhibit.date = payload.date
      }
      if (payload.time) {
        exhibit.time = payload.time
      }
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    loadExhibits ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('exhibits').once('value')
        .then((data) => {
          const exhibits = []
          const obj = data.val()
          for (let key in obj) {
            exhibits.push({
              id: key,
              title: obj[key].title,
              location: obj[key].location,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              time: obj[key].time,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedExhibits', exhibits)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', true)
          }
        )
    },
    createExhibit ({commit, getters}, payload) {
      const exhibit = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        time: payload.time,
        creatorId: getters.user.id
      }
      firebase.database().ref('exhibits').push(exhibit)
        .then((data) => {
          const key = data.key
          commit('createExhibit', {
            ...exhibit,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
      // reach out to firebase and store it
    },
    updateExhibitData ({commit}, payload) {
      commit('setLoading', true)
      const updateObj = {}
      if (payload.title) {
        updateObj.title = payload.title
      }
      if (payload.description) {
        updateObj.description = payload.description
      }
      if (payload.date) {
        updateObj.date = payload.date
      }
      if (payload.time) {
        updateObj.time = payload.time
      }
      firebase.database().ref('exhibits').child(payload.id).update(updateObj)
        .then(() => {
          commit('setLoading', false)
          commit('updateExhibit', payload)
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
              registeredExhibit: []
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
              registeredExhibit: []
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
      commit('setUser', {id: payload.uid, registeredExhibit: []})
    },
    logOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedExhibits (state) {
      return state.loadedExhibits.sort((exhibitA, exhibitB) => {
        return exhibitA.date > exhibitB.date
      })
    },
    featuredExhibits (state, getters) {
      return getters.loadedExhibits.slice(0, 5)
    },
    loadedExhibit (state) {
      return (exhibitId) => {
        return state.loadedExhibits.find((exhibit) => {
          return exhibit.id === exhibitId
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})

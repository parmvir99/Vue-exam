import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as firebase from 'firebase'
import AlertCmp from './components/Shared/alert.vue'
import EditExhibit from './components/Exhibit/Edit/edit_exhibit'
import Register from './components/Exhibit/registration/register'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)
Vue.component('edit-exhibit-btn', EditExhibit)
Vue.component('register-dialog', Register)
/* eslint-disable no-new */
Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCChD_lCs1hps-m6GrZ4jM8HeO6IyvBuo4',
      authDomain: 'photography-exhibits.firebaseapp.com',
      databaseURL: 'https://photography-exhibits.firebaseio.com',
      projectId: 'photography-exhibits',
      storageBucket: ''
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadExhibits')
  },
  template: '<App/>'

})

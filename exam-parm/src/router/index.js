import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import ExhibitList from '../components/Exhibit/exhibit_list'
import CreateExhibit from '../components/Exhibit/create_exhibit'
import Profile from '../components/Users/profile'
import SignIn from '../components/Users/sign_in'
import SignUp from '../components/Users/sign_up'
import Exhibit from '../components/Exhibit/exhibit'
import Guard from './guard'
Vue.use(Router)
export default new Router({mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Exhibit/create_exhibit',
      name: 'CreateExhibit',
      component: CreateExhibit,
      beforeEnter: Guard
    },
    {
      path: '/Exhibit/exhibit_list',
      name: 'ExhibitList',
      component: ExhibitList
    },
    {
      path: '/Exhibit/exhibit_list/exhibit/:id',
      name: 'Exhibit',
      props: true,
      component: Exhibit
    },
    {
      path: '/Users/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: Guard
    },
    {
      path: '/Users/sign_in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/Users/sign_up',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

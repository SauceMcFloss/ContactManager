import Vue from 'vue'
import Router from 'vue-router'

// Router Page Imports go here
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ContactsPage from './components/ContactsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: LoginPage
    },
    {
      path: '/register',
      component: RegisterPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/contactshome',
      component: ContactsPage
    }
  ]
})

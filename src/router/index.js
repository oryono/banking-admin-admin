import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import Clients from '../views/Clients'
import Login from '../views/Login'
import {isLoggedIn} from "../services/authService";
import NewClient from "../views/NewClient";
import NotFound from "../views/NotFound";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },

  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },

  {
    path: '/clients/create',
    name: 'CreateClient',
    component: NewClient
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  // otherwise redirect to home
  { path: '*', component: NotFound }
  // {
  //   path: '/clients',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = isLoggedIn()

  console.log(loggedIn)

  if (authRequired && !loggedIn) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
  }
  else {
    return next()
  }
})


export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import CheckOut from '../views/CheckOut.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: CheckOut
  },


]

const router = new VueRouter({
  routes
})

export default router
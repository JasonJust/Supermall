import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../view/Home/Home.vue')
const Category = () => import('../view/Category/Category.vue')
const Cart = () => import('../view/Cart/Cart.vue')
const Profile = () => import('../view/Profile/Profile.vue')

Vue.use(VueRouter)

const routes=[{
  path: '/',
  redirect: '/home'
},{
  path: '/home',
  component: Home
},{
  path: '/category',
  component: Category
},{
  path: '/cart',
  component: Cart
},{
  path: '/profile',
  component: Profile
}]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
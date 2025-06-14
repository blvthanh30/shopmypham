import { createRouter, createWebHistory } from 'vue-router'
import Contact from '@/pages/Contact.vue'
import News from '@/pages/News.vue'
import Home from '@/pages/Home.vue'
import Register from '@/pages/Register.vue'
import Login from '@/pages/Login.vue'
import Profile from '@/pages/profile.vue'
import Cart from '@/pages/cart.vue'
import OrderSuccessPage from '@/pages/OrderSuccessPage.vue'
import MyOrdersPage from '@/pages/MyOrdersPage.vue'
import Sunscreen from '@/pages/Sunscreen.vue'
import Nourishingcream from '@/pages/Nourishingcream.vue'
import Washface from '@/pages/Washface.vue'
import Son from '@/pages/Son.vue'
import ForgotPassword from '@/pages/ForgotPassword.vue'
import Exfoliating from '@/pages/Exfoliating.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/news', name: 'News', component: News },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/order-success', name: 'order-success',component: OrderSuccessPage },
    { path: '/my-orders', name: 'my-orders', component: MyOrdersPage,},
    { path: '/sunscreen', name: 'Sunscreen', component: Sunscreen },
    { path: '/nourishingcream', name: 'Nourishingcream', component: Nourishingcream },
    { path: '/washface', name: 'Washface', component: Washface },
    { path: '/son', name: 'Son', component: Son },
    {path: '/ForgotPassword',name:'ForgotPassword',component:ForgotPassword},
    {path: '/Exfoliating',name:'Exfoliating',component:Exfoliating},
  ]
});

export default router;

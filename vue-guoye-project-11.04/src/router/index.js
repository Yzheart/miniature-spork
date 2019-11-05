import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../HomePage"
import Video from "../Video"
Vue.use(VueRouter)

const routes = [
    {path:'/HomePage',component:HomePage},
    {path:'/Video',component:Video},

]
const router = new VueRouter({
    routes
})
//



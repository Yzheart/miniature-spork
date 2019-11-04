import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../HomePage"
import Video from "../Video"
Vue.use(VueRouter)
let router = new VueRouter({
    routes:[
        {path:"/",components:HomePage},
        {path:"/two",component:Video},

    ]
})
export default router
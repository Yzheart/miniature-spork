import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../HomePage"
import Wfind from "../Wfind"
import MeMe from "../MeMe"
import Messages from "../Messages"


import Video from "../Video"
Vue.use(VueRouter)

let router = new VueRouter({

    //路由map集合 path :views component
    routes:[
        {path:"/",component:HomePage},
        {path:"/Video",component:Video},
        {path:"/Wfind",component:Wfind},
        {path:"/MeMe",component:MeMe},
        {path:"/Messages",component:Messages},

    ]
})

export default router



// import Vue from 'vue'
// // import App from './HomePage.vue'
// import HomePage from "./HomePage.vue"
// import  VueRouter from "vue-router"
//
// Vue.use(VueRouter)
// new Vue({
//
//   render: h => h(HomePage),
//
// }).$mount('#app')
// // new Vue({
// //     el:"#app",
// //     render(h){
// //         return h(app)
// //     }
// // })
import Vue from 'vue'
import app from './app.vue'
import MinUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
Vue.use(MinUI)
Vue.config.productionTip = false

new Vue({
   router,
    render: h => h(app),
}).$mount('#app')
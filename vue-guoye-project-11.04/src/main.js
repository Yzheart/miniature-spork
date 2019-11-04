import Vue from 'vue'
// import App from './HomePage.vue'
import app from "./HomePage.vue"
import  VueRouter from "vue-router"
Vue.use(VueRouter)
// new Vue({
//
//   render: h => h(App),
//
// }).$mount('#app')
new Vue({
    el:"#app",
    render(h){
        return h(app)
    }
})
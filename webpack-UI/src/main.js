import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

import './lib/mui/css/mui.css'


// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

import { Button } from 'mint-ui'
Vue.component(Button.name, Button)




import app from './App.vue'

import router from './router.js'

var vm = new Vue({
    el:"#app",
    render: c =>c(app),
    router
})
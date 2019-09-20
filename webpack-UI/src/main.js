import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'



import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import app from './App.vue'

import router from './router.js'

var vm = new Vue({
    el:"#app",
    render: c =>c(app),
    router
})
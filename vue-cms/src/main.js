import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

var cart = JSON.parse(localStorage.getItem('cart')|| '[]')

var store = new Vuex.Store({
    state:{
        cart: cart
    },
    mutations:{
        addToCart(state, goodsinfo){

            var flag = false;

            state.cart.some(item =>{
                if(item.id == goodsinfo.id){
                    item.count += parseInt(goodsinfo.count);
                    flag = true
                    return true
                }
            })

            if(!flag){
                state.cart.push(goodsinfo)
            }

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        updateGoodsInfo(state, goodsinfo){
            state.cart.some(item =>{
                if(item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeFromCart(state, id){
            state.cart.some(item=>{
               if(item.id == id){
                   state.cart.splice(this.i, 1)
                   return true
               } 
            })

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        updatedGoodsSelected(state, info){
            state.cart.some(item =>{
                if(item.id == info.id){
                    item.selected = info.selected
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
    getters:{
        getAllCount(state){
            var c = 0;
            state.cart.forEach(item =>{
                c += item.count
            })
            return c
        },
        getGoodsCount(state){
            var o =  {};
            state.cart.forEach(item =>{
                o[item.id] = item.count;
            })
            return o
        },
        getGoodsSelected(state){
            let obj = {}
            state.cart.forEach(item =>{
                obj[item.id] = item.selected
            })
            return obj
        },
        getGoodsCountAndAmount(state){
            let obj = {
                count:0,
                amount:0
            }

            state.cart.forEach(item =>{
                if(item.selected){
                    obj.count += item.count
                    obj.amount += item.price * item.count
                }
            })
            return obj
        }
    }
})

import moment from 'moment'
Vue.filter('dateFormat', function(dataStr, pattern="YYYY-MM-DD hh:mm:ss"){
    return moment(dataStr).format(pattern)
})

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true;

import app from './App.vue'

// import { Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui'
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


import router from './router.js'

var vm = new Vue({
    el:"#app",
    render: c => c(app),
    router,
    store
})
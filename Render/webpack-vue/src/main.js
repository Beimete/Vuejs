// Entry file

// 在 webpack 构建的项目中进行 vue 开发

import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'

// var login = {
//     template:'<h1>这是login组件，它使用网页中形式创建出来的组件！</h1>'
// }

// Vue Loader v15 现在需要配合一个 webpack 插件才能正确使用

// 1. 导入login组件
import login from './login.vue'
// 默认webpack无法打开.vue文件，需要安装vue-loader

var vm = new Vue({
    el:"#app",
    data:{
        msg:'123'
    },
    // components:{
    //     login
    // }

    // render:function(createElements){
    //     return createElements(login)
    // }

    // 上面的render函数可以进行简写
    render:c => c(login)
    
})

import m1, {title as t, content} from './test.js'
console.log(m1);
console.log(t + '---' + content);
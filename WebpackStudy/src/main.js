// 这个 main.js 是我们项目的 JavaScript Entry 文件

// 1.导入 jQuery
// import *** from *** 是 ES6中导入模块的方式
// 由于 ES6 代码很高级，浏览器暂时无法解析，所以 jquery 无法执行
import $ from 'jquery'

// Node 中等价的的pack导入方式
// const $ = require('jquery')

// 使用 import 语法，导入 css 样式表
import './css/index.css'

// 注意：webpack 默认只能打包处理 JS 类型的文件，无法处理其他的 非JS类型的文件
// 如果需要处理非JS文件（如.css样式文件），我们则需要手动安装合适的第三方 loader 加载器
// 1. 打包处理 css 文件的两个loader插件：npm i style-loader css-loader (postcss-loader) -D 
// 2. 打开 webpack.config.js 配置文件，在里面新增一个配置节点 module，它是一个对象，对象内部rules 数组属性，其存放了所有第三方文件的匹配与处理规则；

import './css/index.less'
// 需要导入第三方的loader: npm i less-loader -D；
// 安装完毕提醒require安装一个less：npm i less -D，它是less-loader内部依赖的，我们并不需要定义进module对象下的rules中；

import './css/index.scss'
// scss是sass的扩展
// 需要导入第三方的loader: npm i sass-loader -D；
// 安装完毕提醒require安装一个 node-sass：cnpm i node-sass -D(npm 装得慢)

// 如果要通过路径的形式，去引入 node_modules 中相关的文件，可以直接省略路径前面的node_modules这一层目录，直接写包的名字+具体文件路径
import 'bootstrap/dist/css/bootstrap.css'

$(function(){
    $('li:odd').css('backgroundColor', 'lightgreen');
    $('li:even').css('backgroundColor', function(){
        return '#'+ 'D97699'
    })
})


// class是关键字，ES6中提供的新语法，用来实现面向对象的编程方式，与java, C#实现面向对象的方法一样，class是从后端语言中借鉴过来的
// 之前 ES3 版本的写法如下：
// function Animal(name){
//     this.name = name
// };

// function的本质是一个对象
// Animal.info = 123;

// var a1 = new Animal('小花');

//静态属性，挂载到Animal构造函数，内存中本身就存在一个Animate对象上
// console.log(Animal.info); 

// 实例属性，挂载给Animal构造函数所创建出来的那一块 新内存 中
// console.log(a1.name); 

class Person{
    // 使用static关键字可以定义静态属性，即可以直接通过类名进行访问的属性 Person.info；
    // 实例属性：只能通过类的实例进行访问的属性，叫做实例属性 var p1 = new Person(); p1.xxx
    static info = {name:'zs', age:20}
}

// 访问 Person 类身上的 info 静态属性
console.log(Person.info)
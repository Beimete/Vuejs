# Vue.js

## 简介

- Vue.js是目前最火的一个框架，React是最流行的一个框架。React除了开发网站，还可以开发手机App；Vue语法也是可以进行手机App开发的，需要借助于Weex。

- Vue.js是前端的主流框架之一，和Angular.js、React.js并称前端三大主流框架。

- Vue.js是一套构建用户界面的框架，只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。Vue有配套的第三方类库，可以整合起来做大型项目的开发。

- 前端开发的主要工作：负责MVC中的V这一层，即与用户界面打交道。

## 前端流行框架

- 企业为了提高开发效率：在企业中，时间就是效率，效率就是金钱。增强自己就业时的竞争力：人无我有，人有我优。

- 提高开发效率的发展历程：原生JS->jQuery之类的类库->前端模板引擎->Angular.js/Vue.js。在Vue中，一个核心的概念，就是让用户不再操作DOM元素，解放用户的双手，让程序员可以有更多的时间关注业务逻辑；双向数据绑定的概念。

## 框架和的区别

- Frame框架：是一套完整的解决方案；对项目的侵入性较大，项目如果需要更换框架，则需要重新架构整个项目。如node中的express。

- Library库(插件)：提供某一个小功能，对项目的侵入性较小，如果某个库无法完成某些需求，可以很容易切换到其他库实现需求。如从jQuery切换到Zepto；从EJS切换到art-template。

## Node中MVC与前端中MVVM的区别

- MVC是后端的分层开发概念。Model-View-Controller?
  
    app.js：项目的入口模块，一切的请求，都要先进入这里进行请求。注意app.js并没有路由分发的功能，需要调用router.js模块进行路由的分发处理。-->
    router.js：这是路由分发处理模块[为了保证路由模块的职能单一，router.js只负责分发路由，不负责业务逻辑的处理。]如果涉及到了业务逻辑处理操作，router.js就无能为力，只能调用Controller模块进行业务逻辑处理。-->
    Controller：这是业务逻辑处理层，在这个模块中封装了一些具体的业务逻辑处理的逻辑代码，但是为了保证职能单一，此模块只负责处理业务，不负责处理数据的CRUD。如果涉及到了数据的CRUD，需要调用Model层。-->
    Model：职能单一，只负责操作数据库，执行对应的sql语句，进行数据的Create,Read,Update,Delete。

    Model模型层：职能单一，只负责操作数据库，执行对应的sql语句，进行数据的Create,Read,Update,Delete。
    View视图层：每当用户操作了界面，如果需要进行业务的处理，都会通过网络请求，去请求后端的服务器。此时，我们的请求就会被后端的app.js监听到，即前端页面层。
    Controller层：router.js+Controller。

- MVVM是前端视图层的分层开发思想，主要把每个页面分为M,V和VM。其中VM是MVVM思想的核心，因为VM是M和V之间的调度者。

    M：Model,它保存的是每个页面单独的数据，如数据数据。
    VM：ViewModel,调度者，分隔了M和V。当V层想要获取后保存数据的时候，都要由VM做中间的处理
    V：View,每个页面中的HTML结构。

- 前端页面使用MVVM的思想，主要是为了开发更加方便，VM提供了数据双向绑定。

## Vue.js基本代码和MVVM的对应关系

## Vue指令

- v-cloak,v-text,v-html,v-bind,v-on 跑马灯效果

## 事件修饰符

- .stop 阻止冒泡

- .prevent 阻止默认事件

- .capture 添加事件侦听器时使用时间的捕获模式

- .self 只当时间在该元素本身 比如不是子元素 触发时触发回调

- .once 事件只触发一次

## v-model与双向数据绑定(唯一)

## Vue中使用样式

### class样式

- 1.数组

        <h1 :class="['red', 'thin']">这是一个邪恶的H1</h1>

- 2.数组中三元表达式

        <h1 :class="['red', 'thin', isactive?'active':'']">这是一个邪恶的H1</h1>

- 3.数组中嵌套对象

        <h1 :class="['red', 'thin', {'active':isactive}]">这是一个邪恶的H1</h1>

- 4.直接使用对象

        <h1 :class="{red:true, italic:true, active:true, thin:true}">这是一个邪恶的H1</h1>

### in-line样式

- 1.直接在元素上通过:style的形式书写样式对象

        <h1 :style="{color:'red', 'font-size':'40px'}">这是一个善良的H1</h1>

- 2.将样式对象定义到data中后直接引用到:style

        在data上定义样式：
        data{
            h1StyleObj:{color:'red', 'font-size':'40px', 'font-weight':'200'}
        }
        在元素中，通过属性绑定的形式，将样式对象应用到元素中:
        <h1 :style="h1StyleObj">这是一个善良的H1</h1>

- 3.在:style中通过数组，引用多个data上的样式对象

        在data上定义样式：
        data{
            h1StyleObj:{color:'red', 'font-size':'40px', 'font-weight':'200'},
            h1StyleObj2:{fontstyle:'italic'}
        }
        在元素中，通过属性绑定的形式，将样式对象应用到元素中：
        <h1 :style="[h1StyleObj, h1StyleObj2]">这是一个善良的H1</h1>

## v-for和v-key属性

- 1.迭代数组

        <ul>
            <li v-for="(item,i) in list">索引:{{i}} --- 姓名：{{item.name}} --- 年龄：{{item.age}}</li>
        </ul>

- 2.迭代对象中的属性

        <!-- 循环遍历对象上的属性 -->
        <div v-for="(val, key, i) in userInfo">{{val}} --- {{key}} --- {{i}}</div>

- 3.迭代数字

        <p v-for="i in 10">这是第{{i}}个p标签</p>
        2.2.0+的版本中 当在组件中使用 v-for 时 key现在是必须的。

- 当Vue.js用v-for正在更新已渲染的元素列表时，它默认用"就地复用"策略。如果数据项的顺序被改变，Vue将不是移动DOM元素来匹配数据项的顺序，而是简单复用此处的每个元素，并且确保它在特定元素下显示已被渲染过的每个元素。

- 为了给Vue一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每个项提供一个唯一的key属性

## v-if和v-show属性

- 一般来说，v-if有更高的切换消耗而v-show有更高的初始渲染消耗。因此，如果需要频繁切换v-show较好；如果在运行时条件不大可能改变v-if较好。

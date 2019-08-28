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

        <!-- 在data上定义样式： -->
        data{
            h1StyleObj:{color:'red', 'font-size':'40px', 'font-weight':'200'}
        }
        <!-- 在元素中，通过属性绑定的形式，将样式对象应用到元素中: -->
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

## 过滤器

- 概念：Vue.js允许你自定义过滤器，可被用作一些常见的文本格式化。过滤器可以用在两个地方：mustache插值和v-bind表达式。过滤器应该被添加在 JavaScript 表示式的尾部，由“管道 | ”符表示。Vue.js可以同时调用多个filter，从左到右依次过滤后再输出。

- 1.HTML元素：

                <td>{{item.ctime | dateFormat('yyyy-mm-dd')}}</td>

- 2.全局filter定义方式：

                 Vue.filter('dateFormat', function(dateStr, pattern=""){
                        <!-- 根据给定的时间字符串，得到特定的时间 -->
                        var dt = new Date(dateStr);
                        
                        var y = dt.getFullYear();
                        var m = dt.getMonth()+1;
                        var d = dt.getDate();
                        
                        if(pattern && pattern.toLowerCase() === 'yyyy-mm-dd'){
                                return `${y}-${m}-${d}`
                        }else{
                                var hh = dt.getHours();
                                var mm = dt.getMinutes();
                                var ss = dt.getSeconds();

                                return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
                        }
                })

- 3.私有filters定义方式：

                filters:{
                        <!-- 私有局部过滤器，只能在当前 vm 对象所控制点的 View区域进行使用 -->
                        dateFormat(input, pattern = ""){
                                <!-- 在参数列表中，通过pattern=""来指定形参默认值，防止报错 -->
                                var dt = new Date(input);
                                
                                var y = dt.getFullYear();
                                var m = (dt.getMonth()+1).toString().padStar(2, '0');
                                var d = dt.getDate().toString().padStar(2, '0');
                        <!-- 如果传递进来的字符串类型，转为小写之后，等于yyyy-mm-dd,那么就返回 年-月-日 -->
                        }
                }

## 键盘修饰符

- [JavaScript中键盘事件对应的键码]:https://www.cnblogs.com/wuhua1/p/6686237.html

- 1.x中自定义键盘修饰符

                Vue.directive('on').keyCodes.f2 = 113;

- 2.x中自定义键盘修饰符

        1.通过Vue.config.keyCode.name = number来定义按键修饰符别名：

                Vue.config.keyCodes.f2 = 113;
        
        2.使用自定义的按键修饰符：

                <input type="text" v-model="name" @keyup.f2="add">

## 自定义指令

- 1.自定义全局指令

        <!-- 自定义全局指令 v-focus，为绑定的元素自动获取焦点 -->
        Vue.directive('focus', {
                <!-- 每个函数第一个参数均为 el，表示被绑定了指令的那个元素,这个el参数是一个原生的JavaScript对象，即DOM -->

                <!-- bind 表示 当指令绑定到元素上的时候，立即执行这个 bind 函数且只执行一次 
                与css相关的操作，一般都可以在 bind 中去执行，bind 中指令执行时间一般先于 inserted -->
                bind: function(){},
                <!-- inserted 表示 当绑定的元素插入到 DOM 中，立即执行这个 inserted 函数，
                与JavaScript相关的操作，最好在 inserted 中去执行，防止JavaScript行为不生效-->
                inserted: function(el){<!-- 聚焦元素 -->el.focus()}，
                <!-- update 表示 当 VNode 更新的时候，立即执行这个 update 函数，可能会执行多次-->
                update: function(){}
        });

- 2.自定义局部指令

        <!-- 自定义局部指令 v-color 和 v-fontweight，为绑定的元素设置指定的字体粗细 -->
        directives: {
                'color': {
                        bind: function(el){
                                <!-- style 只要通过指令绑定给内存非元素中的元素，不管这个元素有没有被渲染到页面上，这个元素肯定有一个内联的样式，将来元素肯定会显示到页面中去，这时浏览器的渲染引擎必然解析样式，应用给这个元素-->
                                el.style.color = 'red';
                        }
                },
                'fontweight': {
                        bind: function(el,binding){
                                el.style.fontWeight = binding.value
                        }
                }
        }

- 3.函数简写

        <!-- 很多时候，可能想在 bind 和 update 时触发相同行为，而不关心其他钩子-->

        <!-- 全局指令形式 -->
        Vue.directive('color-swatch', function(el, binding){
                el.style.backgroundColor = binding.value
        })

        <!-- 局部指令形式 -->
        directives:{
                'fontsize': function(el, binding){
                        el.style.fontSize = parseInt(binding.value) + 'px'
                }
        }

- [官方文档]: https://cn.vuejs.org/v2/guide/custom-directive.html

## Vue实例的生命周期

- 什么是生命周期：从Vue实例创建，运行，到销毁期间，总是伴随着各种各样的事件，这些事件，统称为生命周期。

- 生命周期钩子：生命周期事件（函数）的别名

- 主要的生命周期函数分类：

        - 创建期间的生命周期函数
                - beforeCreate：实例刚在内存中被创建出来，此时，还没有初始化好 data 和 methods 属性；
                - created：实例已经在内存中创建成功，此时 data 和 methods 已经创建成功，未开始编译模板；
                - beforeMount：此时已经完成了模板的编译，但是还没有挂载到页面中；
                - mounted：此时已经将编译好的模板挂载到页面指定的容器中显示。
        - 运行期间的生命周期函数
                - beforeUpdate：状态更新之前执行此函数，此时 data中的状态值是最新的，但是页面上显示的数据还是旧的，因为此时还没有开始更新渲染 DOM 节点；
                - updated：实例更新完毕之后调用此函数，此时 data 中的状态值和界面上显示的数据都已经完成了更新，界面已经被重新渲染好了。
        - 销毁期间的生命周期函数
                - beforeDestroy：实例销毁之前调用，在这一步，实例仍然完全可用；
                - destroy：Vue实例销毁后调用，调用后，Vue实例指示的所有东西都会解除绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

## vue-resource 实现 get, post, jsonp 请求

[vue-resource官网]:https://github.com/pagekit/vue-resource

- 1.除了vue-resource以外，还可以使用 axios 的第三方包实现数据的请求

- 2.测试的URL请求资源地址：
  
        - [get请求地址]:http://vue.studyit.io/api/getlunbo
        - [post请求地址]:http://vue.studyit.io/api/post
        - [jsonp请求地址]:http://vue.studyit.io/api/jsonp

- 3.JSONP的实现原理

        - 由于浏览器的安全性限制，不允许AJAX访问协议不同，域名不同，端口号不同的数据接口，浏览器认为这种访问不安全；
        - 可以通过动态创建script标签的形式，把script标签的src属性，指向数据接口的地址，因为script标签不存在跨域限制，这种数据获取方式，称作JSONP；
        - 注意，根据JSONP的实现原理可以知晓，JSONP只支持GET请求。
        - 具体实现过程：

                - 先在客户端定义一个回调方法，预定义对数据的操作；
                - 再把这个回调方法的名称，通过URL传参的形式，提交到服务器的数据接口；
                - 服务器的数据接口组织好要发送给客户端的数据，再拿着客户端传递过来的回调方法名称，拼接出一个调用这个方法的字符串，发送给客户端去解析执行；
                - 客户端拿到服务器返回的字符串后，当做javascript脚本去解析执行，这样就能够拿到JSONP的数据了。

- 4.通过Node.js来手动实现一个JSONP的请求例子

        <!-- 导入解析URL地址的核心模块 -->
        const http = request('http');
        const urlModule = request('url');

        const server = http.createServer();

        <!-- 监听服务器的request请求事件，处理每个请求 -->
        server.on('request', (req, res) =>{
                consturl = req.url;
        })

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
  
        - [get请求地址]:http://www.liulongbin.top:3005/api/getlunbo
        - [post请求地址]:http://www.liulongbin.top:3005/api/post
        - [jsonp请求地址]:http://www.liulongbin.top:3005/api/jsonp

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
        const http = require('http');
        const urlModule = request('url');

        const server = http.createServer();

        <!-- 监听服务器的request请求事件，处理每个请求 -->
        server.on('request', (req, res) =>{
                <!-- write your code here... -->
        })

        <!-- 指定服务器端口号并启动服务器监听 -->
        server.listen(3000, function(){
                console.log('server listen at http://127.0.0.1:3000')
        })

- 5.参见Node_server文件夹中的案例

## Vue动画

- 为什么要有动画：动画能够提高用户的体验，帮助用户更好地理解页面中的功能

### 使用过渡类名

- 1.HTML结构

        <div id="app">
        <input type="button" value="动起来" @click="myAnimate">
        <!-- 使用 transition 将需要过渡的元素包裹起来 -->
        <transition name="fade">
           <div v-show="isshow">动画哦</div>
        </transition>
        </div>

- 2.VM实例

        <!-- 创建Vue实例，得到ViewModel -->
        var vm = new Vue({
                el:"#app",
                data:{
                        isshow:true,
                },
                methods:{
                        myAnimate(){
                                this.isshow = this.isshow;
                        }
                }
        });

- JavaScript钩子函数

         <transition
         @before-enter="beforeEnter"
         @enter="enter"
         @after-enter="afterEnter">
            <div class="ball" v-show="flag"></div>
        </transition>

### 使用第三方类

- Animate实例

         <transition enter-active-class="bounceIn" leave-active-class="bounceOut"
        :duration="{enter:200, leave:400}">
            <h3 v-if="flag" class="animated">这是一个H3</h3>
        </transition>

### 列表动画

- transition-group实例

         <!-- 实现列表过渡的时候，如果需要过渡的元素是 v-for 渲染出来的，不能使用 transition 包裹
        需要使用 transition-group -->
        <!-- 如果要给 v-for 渲染的元素设置动画，必须为每一个元素设置好 :key属性 -->
        <!-- <ul 给transition-group添加appear属性，实现页面刚刚展示出来的入场效果 -->
        <transition-group appear tag="ul">
                <!-- 添加 tag 属性，指定transition-group将要被渲染成何种类型的元素，
                    若不指定tag属性，浏览器会默认渲染成为span标签 -->
                <li v-for="(item, i) in list" :key="item.id" @click="del(i)">
                        {{ item.id }} --- {{ item.name }}
                </li>
            </transition-group>

## Vue组件

- 什么是组件：组件的出现，就是为了拆分Vue实例的代码量，能够让我们以不同的组件，来划分不同的功能模块。我们需要什么样的功能，就可以去调用对应的组件即可。

### 组件化和模块化的不同
  
- 模块化：从代码逻辑的角度进行划分，方便后台代码的分层开发，保证每个功能模块的智能单一；如:Nodejs
- 组件化：从UI界面的角度进行划分，前端的组件化，方便UI组件的重用；如:Vue
  
- ### 全局组件定义的三种方法

- 1.使用Vue.extend配合Vue.component方法：

        var login = Vue.extend({
                template: '<h1>登录</h1>’
        });
        Vue.component('login', login)

- 2.直接使用Vue.component方法

        Vue.component('register', {
                template: '<h1>注册</h1>'
        });

- 3.将模板字符串定义到script标签内部

        <script id="tmp1" type="x-template">
                <div><a href="#">登录</a> | <a href="#">注册</a></div>
        </script>
        <!-- 同时，需要使用Vue.component来定义组件 -->
        Vue.component('account", {
                template:'#tmp1'
        });

- 注意：组件中的DOM结构，有且只有唯一的根元素(Root Element)来进行包裹！

### 私有组件的定义方

        <template id="tmpl2">
        <h1>这是私有的LOGIN组件</h1>
        </template>
         components:{
                <!-- 定义 Vue实例内部的私有组件 -->
                login:{
                    template:'#tmpl2'
                }
            }

### 组件中的data与methods

- 案例

         Vue.component('mycom1', {
            template:'<h1>这是全局组件 --- {{msg}}</h1>',
            // 1. component可以有自己的data;
            // 2. component和Vue的实例的data可为对象不相同，组件中的data必须是一个function;
            // 3. componnet中data除了必须是一个方法外，还必须返回一个对象(object);
            // 4. componnet的data数据，使用方式和vm实例中的data使用方式完全一致
            data:function(){
                return {
                    msg:'data of vue.component'
                }
            },
            methods:{}
        })

- 原因解释

        <script>
        // 假设全局定义data数据类型，多次调用是引用调用，牵一发而动全身！故组件内部采用function
        var dataObj = { count:0 };
        // 这是一个计数器组件，身上有一个按钮，每当点击按钮，让data中的count值 +1
        Vue.component('counter', {
            template:'#tmpl',
            data:function(){
                // return dataObj
                return {count:0}
            },
            methods:{
                increment(){
                    this.count += 1
                }
            }
        })
        var vm = new Vue({
            el:'#app',
            data:{}
        })
        </script>

### 组件的切换

- v-if/else方式实现两个组件间的切换

        <div id="app">
        <a href="" @click.prevent="flag=true">登录</a>
        <a href="" @click.prevent="flag=false">注册</a>

        <!-- v-if和v-else只能适用于两个组件之间的切换 -->
        <login v-if="flag"></login>
        <register v-else="flag"></register>

- 多个组件使用component标签切换

        <div id="app">
        <a href="" @click.prevent="comName='login'">登录</a>
        <a href="" @click.prevent="comName='register'">注册</a>
        <!-- Vue提供了component元素，来展示对应名称的组件 -->
        <!-- component 是一个占位符， :is 属性，可以用来指定要展示的组件名称 "'XXXX'" -->
        <component :is="comName"></component>
        </div>

- 组件切换的过渡动画

        <div id="app">
        <a href="" @click.prevent="comName='login'">登录</a>
        <a href="" @click.prevent="comName='register'">注册</a>

        <!-- 通过mode属性，设置组件切换时候的模式 -->
        <transition mode="out-in">
            <component :is="comName"></component>
        </transition>
        </div>

### 父组件向子组件传值

- 1.组件实例定义方式，注意：一定要使用 props 属性定义父组件传递过来的数据

        <script>
                <!-- 创建Vue实例，得到ViewModel -->
        var vm = new Vue({
                el:"#app",
                data:{
                        msg:"这是父组件中的消息"
                },
                components:{
                        son:{
                                template: '<h1>这是一个子组件 --- {{finfo}}</h1>',
                                props:['finfo']
                        }
                }
        });
        </script>

- 2.使用v-bind或简化指定：，将数据传递到子组件中

        <div id="app">
                <son :finfo="msg"></son>
        </div>

### 子组件向父组件传值

- 1.原理：父组件将方法的引用，传递到子组件内部，子组件在内部调用父组件传递过来的方法，同时把要发送给父组件的数据，在调用方法的时候当做参数传递过去；

- 2.父组件将方法的引用传递给子组件，其中，`getMsg`是父组件中`methods`中定义的方法名称，`func`是子组件调用传递过来方法时的方法名称；

        <son @func="getMsg"></son>

- 3.子组件内部通过`this.$emit('方法名', 要传递的数据)`方式，来调用父组件中的方法，同时把数据传递给父组件使用。

        <div id="app">
        <!-- 引用父组件 -->
        <son @func="getMsg"></son>

        <!-- 组件模板定义 -->
        <script>
        <div>
                <input type="button" value="向父组件传值" @click="sendMsg"/>
        </div>
        </script>
        </div>

        <script>
        <!-- 子组件的定义方式 -->
        Vue.component('son", {
                template:'#son',
                methods:{
                        sendMsg(){
                        <!-- 调用父组件传递过来的方法，同时把数据传递出去 -->
                        this.$emit('func', 'OK')
                        }
                }
        })

        <!-- 创建Vue实例，得到ViewModel -->
        var vm = new Vue({
                el:"#app",
                data:{ },
                methods:{
                        getMsg(val){
                                <!-- 子组件中，通过this.$emit()实际调用方法，在此进行定义 -->
                                alert(val);
                        }
                }
        })
        </script>

### 组件中data和prop的区别

         var vm = new Vue({
            el:"#app",
            data:{
                msg:'123 啊-父组件中的数据'
            },
            methods:{},

            components:{
                com1:{
                    // 子组件中的data数据，并不是通过父组件传递过来的，而是子组件本身私有的，比如子组件通过Ajax请求回来的数据，都可以放到data内部
                    data(){
                        return {
                            title:'son-component',
                            content:'QAQ',
                        }
                    },
                    template:'<h1 @click="change">这是子组件！--{{parentmsg}}</h1>',
                    // 注意：组件中`props` 中所有的数据，都是通过父组件传递给子组件的
                    // props中的数据都是只读的，而data内的数据都是可读可写的
                    // 把父组件传递过来的 parentmsg属性，先在props数组中定义以下，这样才能使用该数据
                    props:['parentmsg'], 
                    methods:{
                        change(){
                            this.parentmsg="被修改了"
                        }
                    }
                }
            }
        })

### 评论列表案例

- 目标：主要练习父子组件之间的传值

### 使用 `this.$refs`来获取元素和组件

        <div id="app">
          <div>
                <input type="button" value="获取元素内容" @click="getElement" />
                <!-- 使用 ref 获取元素 -->
                <h1 ref="myh1">这是一个大大的H1</h1>

                <hr>
                <!-- 使用 ref 获取子组件 -->
                <my-com ref="mycom"></my-com>
          </div>
        </div>

        <script>
        Vue.component('my-com', {
                template:'<h5>这是一个子组件</h5>',
                data(){
                        return{
                                name:'子组件'
                        }
                }
        });

        <!-- 创建Vue实例，得到ViewModel -->
        var vm = new Vue({
                el:"#app",
                data:{ },
                methods:{
                        getElement(){
                                <!-- 通过 this.$refs 来获取元素 -->
                                console.log(this.$refs.myh1.innerText);
                                <!-- 通过 this.$refs 来获取组件 -->
                                console.log(this.$refs.mycom.name)
                        }
                }
        });
        </script>

## 路由

- 后端路由：对于普通网站，所有的超链接都是URL地址，所有的URL地址都对应服务器上对应的资源；该对应关系就是 路由（Router）

- 前端路由：对于单页面应用程序来说，主要通过URL中的hash(#号，也称作“锚点”)来实现不同页面之间的切换，同时，hash有一个特点：HTTP请求中不会包含hash相关的内容；所以，单页面程序中的页面跳转`主要用hash实现`；

- 在单页面应用程序中，这种通过hash改变来切换页面的方式，称作前端路由（区别于后端路由）；

- [参考网站](https://www.cnblogs.com/joyho/articles/4430148.html)

### vue-router的基本使用

- 1.导入vue-router组件类库

        <!-- 1.导入vue-router组件类库 -->
        <script src="../lib/vue-router-2.7.0.js"></script>

- 2.使用vue-router组件来导航

        <!-- 2.使用router-link组件来导航 -->
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>

- 3.使用router-view组件来显示匹配的组件

        <!-- 3.使用router-view来显示匹配的组件 -->
        <router-view><router-view>

- 4.创建使用`Vue.extend`创建组件

        <!-- 4.1 使用Vue.extend来创建登录组件 -->
        var login = Vue.extend({
                template:'<h1>登录组件</h1>'
        });

        <!-- 4.2 使用Vue.extend来创建注册组件 -->
        var register = Vue.extend({
                template:'<h1>注册组件</h1>'
        });

- 5.创建一个路由router实例，通过router属性来定义路由匹配规则

        <!-- 5.创建一个路由router实例，通过router属性来定义路由匹配规则 -->
        var routerObj = new Vue({
                routes:{
                        {path: 'login', component:login}
                        {path: 'register', component:register}
                }
        })

- 6.使用router属性来使用路由规则，将创建的router对象与vm实例进行关联

        var vm = new Vue({
            el:"#app",
        <!-- 将路由规则对象，注册到vm实例上，用来监听URL地址的变化，然后展示对应的组件 -->
            router:routerObj,
        })

### 使用tag属性指定router-link渲染的标签类型

        <router-link to="/login" tag="span">登录</router-link>
        <router-link to="/register">注册</router-link>

### 设置路由重定向

        {path:'/', redirect:'/login'}

### 设置路由高亮

        .router-link-active, .myactive{
            color:red;
            font-weight: 800;
            font-style: italic;
            font-size: 20px;
            text-decoration: underline;
            background-color: orange;
        }

        <!-- 不使用router-link-active，自定义class名称，实现 路由高亮 -->
        linkActiveClass:'myactive';

### 设置路由切换动效

        .v-enter,
        .v-leave-to{
            opacity: 0;
            transform: translateX(140px);
        }

        .v-enter-active,
        .v-leave-active{
            transition:all 0.5s ease;
        }

        <transition mode="out-in">
            <router-view></router-view>
        </transition>

### 在路由规则中定义参数

- 在规则中定义参数

        {path: 'register/:id', component:register}

- 通过`this.$route.query`来获取路由中的参数

        var login = Vue.extend({
                template:'<h1>注册组件 --- {{this.$route.query.id}}</h1>'
        })

- 通过`this.$route.params`来获取路由中的参数

        var register = Vue.extend({
                template:'<h1>注册组件 --- {{this.$route.params.id}}</h1>'
        })

### 使用`children`属性实现路由嵌套

         var router = new VueRouter({
            routes:[
                {
                    path:'/account', 
                    component:account,
                    children[
                        {path:'login', component:login},
                        {path:'register', component:register},
                    ]
                },
            ]
        })

### 命名视图实现经典布局

        <div id="app">
        <router-view></router-view>
        <div class="container">
            <router-view name="left"></router-view>
            <router-view name="main"></router-view>
        </div>
        </div>

        var router = new VueRouter({
           routes:[
               {path:'/', components:{
                   'default':header,
                   'left':leftBox,
                   'main':mainBox,
               }},
           ]
       });

### 监听名称案例

- methods方式

        getFullname(){
                this.fullname = this.firstname + '-' + this.lastname
        }

- watch方式

         watch:{
                firstname:function(newVal, oldVal){
                        this.fullname = newVal + '-' + this.lastname
                },
                lastname:function(newVal){
                        this.fullname = this.firstname + '-' + newVal
                }
        }

- computed方式

        'fullname':function(){
                    console.log('ok')
                    return this.firstname + '-'+ this.middlename + '-' + this.lastname
        }

### `watch`、`computed`、`methods`之间的对比

- `computed`属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算，主要当做属性来使用；

- `methods`方法表示一个具体的操作，主要书写业务逻辑；
  
- `watch`一个对象，键是需要观察的表达式，值是对应的回调函数，主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作，可以看作是`computed`和`methods`的结合体。

## nrm的安装使用

- [NPM镜像源地址](https://registry.npmjs.org/)

- 作用：它提供了一些最常用的NPM包镜像地址，能够让我们快速地切换安装包的服务器地址；

- 镜像：原来，包刚一开始是只存在于国外的NPM服务器，但是由于网络原因，经常访问不到，这时候，我们可以在国内，创建一个和官网完全一样的NPM服务器，只不过，数据是从人家那里拿过来的，除此之外，使用方式完全一样；

- 安装步骤：

        - 1.运行`npm i nrm -g`全局安装`nrm`包；
        - 2.使用`nrm ls`查看当前所有可用的镜像源地址以及当前所使用的镜像源地址；
        - 3.使用`nrm use npm`或`nrm use taobao`切换不同的镜像源地址；

- 注意：nrm只是单纯地提供了几个常用的下载包的URL地址，并能够让我们在这几个地址之间，很方便地进行切换；但是我们每次安装包的时候，使用的装包工具，都是 npm，nrm只是改变了 npm 的装包地址；

### 相关文件

- [URL中的hash(#)](http://www.cnblogs.com/joyho/articles/4430148.html)

## Webpack

- 在网页中会引用哪些常见的静态资源？

        - JS
          - .js  .jsx  .coffee .ts(TypeScript 类 C# 语言)
        - CSS
          - .css .less .sass .scss
        - Images
          - .jpg .png .gif .bmp .svg
        - Fonts
          - .svg .ttf .eot .woff .woff2
        - 模板文件
          - .ejs .jade .vue[这是在webpack中定义组件的方式，推荐这么使用]

- 网页中引入的静态资源多了以后有什么问题？

        - 1.需要发起很多的二次请求，网页加载速度慢；
        - 2.需要处理错综复杂的依赖关系

- 如何解决上述两个问题？

        - 1.合并、压缩、精灵图、图片的Base64编码；
        - 2.可以使用之前学过的requireJS，也可以使用webpack解决各个包之间的复杂依赖关系

- 什么是Webpack?

        - webpack是前端的一个项目构建工具，它是基于 Node.js 开发出来的一个前端工具；

### 如何完美实现上述的两种解决方案

- 1.使用Gulp，是基于task任务的；

- 2.使用Webpack，是基于整个项目进行构建的；

- 借助于webpack前端自动化构建工具，可以完美实现资源的合并、打包、压缩、混淆等诸多功能

- 根据官网的图片介绍webpack打包的过程

- [Webpack官网](http://webpack.github.io/)

### webpack安装的两种方式

- 1.运行`npm i webpack -g`全局安装webpack，这样就能在全局使用webpack的命令

- 2.在项目根目录中运行`npm i webpack --save-dev`安装到项目依赖中

### 初步使用webpack打包构建列表隔行变色案例

- 1.运行`npm init`初始化项目，使用npm管理项目中的依赖包

- 2.创建项目基本的目录结构

- 3.使用`cnpm i jquery --save`安装jquery类库

- 4.创建`main.js`并书写各行变色的代码逻辑

        <!-- 导入jQuery类库 -->
        import $ from 'jquery'
        <!-- 设置偶数行背景色，索引从0开始，0是偶数 -->
        $('#list li:even').css('backgroundColor', 'lightblue');
        <!-- 设置奇数行背景色 -->
        $('#list li:odd').css('backgroundColor', 'pink');

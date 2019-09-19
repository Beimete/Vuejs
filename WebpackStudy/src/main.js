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

// main.js 在 webpack4.x 上根目录 WebpackStudy 内部的处理命令为：

//  npm init -y
//  npm i jquery -S
//  webpack .\src\main.js -o .\dist\bundle.js  --mode=development

// 经过演示，webpack可以实现的功能有：
// 1. webpack 能够处理 javascript 文件中互相依赖的关系
// 2. webpack 能够处理 javascript 文件的兼容问题，能够把浏览器无法识别的高级语法，转换成能正常识别的低级语法

// 使用 webpack-dev-server 工具，实现自动打包编译的功能
// 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的 本地（局部） 开发依赖；
// 2. 安装完毕后，这个工具的用法和 webpack 命令的用法，完全一样；
// 3. 由于项目本地局部安装的 webpack-dev-server ，故无法把其当做脚本命令，在powershell终端中直接运行；（只有安装到全局 -g 的工具，才能在终端中正常执行）
// 4. 注意：webpack-dev-server 这个工具，如果想要正常运行，在本地项目中，必须安装 webpack；
// 5. webpack-dev-server 帮我们打包生成的 bundle.js 并没有存放到实际的物理磁盘上，而是直接托管到了电脑的内存中，所以，我们在项目根目录下，根本找不到这个实时打包好的 bundle.js；
// 6. 我们可以认为，webpack-dev-server 把打包好的 bundle.js ，以一种虚拟的形式，托管到项目的根目录中，虽然我们看不到它，但是可以认为，和 dist src node-modules 平级，有一个看不见的文件叫做 bundle.js；
// 7. 之所以放在内存中，是因为内存转速快！比硬盘（磁盘）快的多
// 8. 停止 webpack-dev-server 的命令行：Ctrl + C；
// 9. --hot 对于bundle.js没有浪费资源全部重新加载，只是局部打了补丁；对于.js页面还是有刷新的，.css页面可以无刷新；

// 直接在计算机内存根据index.html生成 html文件
// 1. 使用`npm i html-webpack-plugin -D`安装插件；
// 2. 在 webpack.config.js中导入可以在内存中生成 HTML 页面的插件，即 html-webpack-plugin；
// 3. 内存中的index.html文件比物理磁盘上的index.html文件多了一行：
    /*
        使用 html-webpack-plugin，不再需要手动处理 bundle.js引用路径；
        这个 plugin 会自动创建一个合适的 script，并且引用了正确的路径；

        </div>
        <script type="text/javascript" src="bundle.js"></script></body>
        </html>

        那么，我们可以尝试将物理磁盘上的 index.html 文件注释掉，理论上可以正常显示 列表各行变色案例
        经过试验，上面的思路是正确的
    */
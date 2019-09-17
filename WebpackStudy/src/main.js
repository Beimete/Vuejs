// 这个 main.js 是我们项目的 JavaScript Entry 文件

// 1.导入 jQuery
// import *** from *** 是 ES6中导入模块的方式
// 由于 ES6 代码很高级，浏览器暂时无法解析，所以 jquery 无法执行
import $ from 'jquery'

// Node 中等价的的pack导入方式
// const $ = require('jquery')

$(function(){
    $('li:odd').css('backgroundColor', 'blue');
    $('li:even').css('backgroundColor', function(){
        return '#'+ 'D97634'
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
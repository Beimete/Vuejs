const path = require('path')
// 启用热更新的第2步
const webpack = require('webpack')

// 导入在内存中生成 HTML 页面的插件
// 注意：只要是插件，都需要二次放到 plugins 节点中
// html-webpack-plugin 的两个作用：
// 1. 自动在内存中，根据指定页面生成一个位于内存中的页面；
// 2. 自动将打包好的 bundle.js 追加到页面的 DOM 结构中去；
const htmlWebpackPlugin = require('html-webpack-plugin')

// 这是一个配置文件，其实就是一个js文件，通过 Node 中的模块操作，向外暴露了一个配置对象
module.exports = {
    // 设置当前位开发模式
    mode: 'development',
    // 入口文件，表示要使用 webpack 打包哪个文件
    entry: './src/main.js',
    output:{
        // 定义输出路径及相关配置
        // 指定打包好的文件，将输出到哪个目录中
        path: path.resolve(__dirname, './dist'),
        // 指定输出的文件名称
        filename: 'bundle.js'
    },
    devServer:{
        // 这是配置 dev-server 命令参数的第二种形式，相对pack.json中修改script来说麻烦一些
        open:true, // 自动打开浏览器
        port:3000, // 设置启动时候的运行端口
        contentBase: 'src', // 指定托管的根目录
        hot: true, // 启用热更新的第1步（其实 webpack 4.x只需第一步就可以，其余的配置是 webpack 3.x）
    },
    plugins:[
        // 配置插件的节点
        new webpack.HotModuleReplacementPlugin(), // new 一个 热更新 的模块对象，启用热更新的第3步
        new htmlWebpackPlugin({
            // 创建一个在内存中生成html页面的插件
            // 指定模板页面，将来会根据指定的页面路径，来生成内存中的html页面
            template:'./src/index.html',
            filaname:'index.html' // 指定内存中生成的时候的页面文件名称
        })
    ],
    module:{
        // 这个节点用于配置所有第三方模块的加载器和匹配规则
        rules:[
            {test: /\.css$/, use:['style-loader', 'css-loader']}, 
            // 正则(re)匹配所有以 .css 结尾的文件；'css.loader'必须写在'style.css'的后面，实际调用的规则是 从右往左 依次进行调用；
            // webpack 处理第三方文件类型的过程：
            // 1. 发现这个要处理的文件不是 JS 文件，然后就去配置文件中查找有没有对应的第三方 loader 规则；
            // 2. 如果能找到对应的规则，就会调用对应的 loader 处理该类型的文件；
            // 3. 在调用loader的时候，是从后往前调用的；
            // 4. 当最后的一个loader调用完毕，会把处理的结果直接交给 webpack 进行打包合并，最终输出到 bundle.js 中去；
            
            {test: /\.less$/, use:['style-loader', 'css-loader', 'less-loader']},
            // 上面一行的代码是配置处理 .less 文件的第三方处理规则

            {test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']},
            // 上面一行的代码是配置处理 .scss 文件的第三方处理规则

            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader?limit=18702&name=[hash:8]-[name].[ext]'},
            // 上面一行的代码是配置处理图片路径的loader
            // limit给定的值是图片的大小，单位是byte，目的是让大图保真，让小图压缩；
            // 如果所引用的图片大于或等于给定的limit值，则不会被转换为base64格式的字符串，反之会被转为base64格式的字符串

            {test:/\.(ttf|eot|svg|woff|woff2)$/, use:'url-loader'},
            // 上面一行的代码是配置处理字体文件的loader，一般不要将字体和图片的loader混写在一起

            {test:/\.js$/, use:'babel-loader', exclude:/node_modules/}
            // 在配置babel的loader规则的时候，必须把node_modules目录通过exclude选项排除掉
        ]
    }
};

// 当在 TERMINAL 命令行输入命令 'webpack'，它做的几步事情：
// 1. 首先，webpack发现，我们并没有通过命令的形式，给它指定入口和出口；
// 2. webpack 就会去项目的 根目录 中找到 'webpack.config.js' 的配置文件；
// 3. 当找到配置文件后，webpack 会去解析执行它，当解析执行完成后，就得到了配置文件中导出的配置对象；
// 4. 当 webpack 拿到配置对象后，就拿到了指定的 入口 和 出口，然后进行打包构建；
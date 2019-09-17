const path = require('path')

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
    }
};

// 当在 TERMINAL 命令行输入命令 'webpack'，它做的几步事情：
// 1. 首先，webpack发现，我们并没有通过命令的形式，给它指定入口和出口；
// 2. webpack 就会去项目的 根目录 中找到 'webpack.config.js' 的配置文件；
// 3. 当找到配置文件后，webpack 会去解析执行它，当解析执行完成后，就得到了配置文件中导出的配置对象；
// 4. 当 webpack 拿到配置对象后，就拿到了指定的 入口 和 出口，然后进行打包构建；
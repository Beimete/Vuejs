// 导入解析URL地址的核心模块
const http = request('http');

// 创建一个http服务器
const server = http.createServer();

// 监听服务器的request请求事件，处理每个请求
server.on('request', (req, res) =>{
    const url = req.url;
    
    if(url === '/getscript'){
        // 拼接一个合法的JavaScript脚本，此处拼接一个方法的调用
        var scriptStr = 'showInfo()'
        // res.end发送给客户端，客户端把这个字符串当做JavaScript代码去执行
        res.end(scriptStr)
    }else{
        res.end('404')
    }
})

// 指定端口号并启动服务器监听
server.listen(3000, function(){
        console.log('server listen at http://127.0.0.1:3000')
})

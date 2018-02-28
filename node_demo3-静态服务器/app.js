// // 引入express模块
// var express = require('express');
// // 初始化express模块
// var app = express();

// // 引入静态文件目录
// app.use(express.static('dist'));

// // 引入http包
// var http=require('http');

// // 启动一个服务
// http.createServer(function(req,res){

// 	// 状态码为200,返回的状态，400会报错，但是仍然能看到后台内容
// 	// 第二个参数为返回类型，换成'json/plain'会变成下载内容？？？！
//     res.writeHead(200,{'Content-Type':'text/plain'});

//     // 在页面上输出的内容，
//     // 但是这个指令经过转码，无法加载html标签
//     res.end('hello\n<span>大家好</span>');

// // 监听端口号为8888
// }).listen(8888,'127.0.0.1');

// 引入express模块
var express = require('express');
// 初始化express模块
var app = express();

// 引入静态文件目录
app.use(express.static('src'));

// 监听3000端口
var server = app.listen(7777, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

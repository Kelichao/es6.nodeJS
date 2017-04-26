# node.js

![image](https://cloud.githubusercontent.com/assets/18028533/21456946/86c7531e-c966-11e6-87ef-1d14cf656949.png)
- [express中文网](http://www.expressjs.com.cn/ )

# 第一步

- 生成一个package文件。把这个设置成app.js      entry point: (app.js)
> $ npm init 

# 第二步
- 安装express
> $ npm install express --save

# 第三步
- 在目录中新建app.js,填入以下代码

```js
// 引入express模块
var express = require('express');
// 初始化express模块
var app = express();

app.get('/', function (req, res) {
  // 返回调用send方法进行输出
  res.send('Hello World!');
});

// 监听3000端口
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
```
# 第四步
- 运行命令，启动服务器
> $ node app.js

**然后在浏览器中打开 http://localhost:3000/ 并查看输出结果**

![image](https://cloud.githubusercontent.com/assets/18028533/21456908/55cc827a-c966-11e6-9676-3d02eac32b38.png)



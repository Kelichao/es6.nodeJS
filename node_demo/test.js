
// node中有自己的包管理器，不需要外面套一层自执行函数就可以使用
function test1() {
	console.log("真的好");
}
console.log("大家好");

var object = {
	a:1,
	b:2
};

// return object; 在node环境中return整个模块已经是不行了
// 英因此需要借助module.exports这个方法，将整个js文件给到处
// 这里是node不需要自执行函数
module.exports = object; 
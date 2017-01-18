var  menu =  require('./menu.json');
var goods = require('./goods.json');
var banner = require('./banner.json');
//require 加载模块的方法
module.exports = function(){
	return {
		"menu": menu,
		"goods":goods,
		"banner":banner
	}
}

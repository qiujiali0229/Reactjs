var styleSheets = {
	"container":{
		"width":"99.5%",
		"display":"flex",
		"paddingRight":"0.5%",
		"borderTop":"1px solid #ddd",
		"marginTop":"1.6rem"
	},
	"menu":{
		"width":"25%",
		"boxSizing":"border-box",
		"borderRight":"1px solid #ddd",
		"background":"#efefef",
		"position":"fixed",
		"left":"0",
		"top":"1.6rem"
	},
	"goods":{
		"width":"72%",
		"paddingLeft":"3%",
		"marginLeft":"25%"
	},
	"goods1":{
		"width":"100%"
	},
	"title":{
		"width":"100%",
		"height":"1.55rem",
		"lineHeight":"1.55rem",
		"fontSize":"0.4rem",
		"color":"#a2a2a2"
	},
	"goodsUl":{
		"width":"100%",
		"display":"flex",
		"flexDirection":"row",
		"flexWrap":"wrap",
		"overflow":"hidden"
	},
	"goodsLi":{
		"width":"33.3%",
		"height":"3.1rem",
		"display":"flex",
		"flexDirection":"column",
		"justifyContent":"center",
		"alignItems":"center",
		"overflow":"hidden"
	},
	"goodsImg":{
		"width":"1.7rem",
		"height":"1.6rem"
	},
	"goodsSpan":{
		"width":"1.7rem",
		"height":"0.6rem",
		"marginTop":"0.25rem",
		"lineHeight":"0.6rem",
		"textAlign":"center",
		"fontSize":"0.4rem",
		"color":"#a2a2a2"
	}
}
var MenuChild = require('./f-menuChild.js');
var Xlayout = require('./x-layout.js');
var Menu = React.createClass({
	getDefaultProps : function(){
		return {
			urlMenu : '/api/menu',
			urlGoods : '/api/goods'
		}
	},
	getInitialState : function(){
		return {
			resolve : '',
			goods : '',
			index : 0
		}
	},
	componentWillMount : function(){
		var This = this;
		$.ajax({
			url:this.props.urlMenu,
			success:function(res){
				This.setState({
					resolve : res
				})
			}
		});
		$.ajax({
			url:this.props.urlGoods,
			success:function(res){
				This.setState({
					goods : res
				})
			}
		})
	},
	render : function(){
//		console.log(this.state.resolve.length);
        //如果状态resolve存在 则循环菜单栏数据
		var template = [];
		var This = this;
		if(this.state.resolve){
			for(var i=0;i<this.state.resolve.length;i++){
				template.push(
					<MenuChild key={i} name={this.state.resolve[i]} index={function(res){
				This.setState({
					index:res
				})
			}} />
				)
			}
		}
		
		
		
		
		//如果状态index存在则循环每个子项菜单的数据
		var goodsArr1 = [];
		var goodsArr = [];
			var data = this.state.goods;
			
			for(var i=0;i<data.length;i++){
				if(this.state.index == i){
					var a = data[i];
					for(var kind in a){
						var b = a[kind];
						for(var j=0;j<b.length;j++){
							goodsArr1.push(
								<li style={styleSheets.goodsLi}>
									<img style={styleSheets.goodsImg} src={b[j][1]} />
									<span style={styleSheets.goodsSpan}>{b[j][0]}</span>
								</li>
							)
						}
					}
				}
			}
			
		//	console.log(data);
			for(var i=0;i<data.length;i++){
				if(this.state.index == i){
					var a = data[i];
//					console.log(a);
					for(var kind in a){
					//	var b = a[kind];
//						console.log(kind);
						goodsArr.push(
							<div style={styleSheets.goods1}>
								<div style={styleSheets.title}>{kind}</div>
								<ul className="liList" style={styleSheets.goodsUl}>
									{goodsArr1}
								</ul>
							</div>
						)
					}
				}
			}
		return (
			<div style={styleSheets.container}>
				<ul className="ula" style={styleSheets.menu}>
					{template}
				</ul>
				<div className="div" style={styleSheets.goods}>
					{goodsArr}
				</div>
			</div>
		)
	},
	componentDidMount : function(){
		var $div = $(".div");
		$div.on("click","li",function(){
			console.log($(this).index());
			console.log($(this).index() !== 0);
			if($(this).index() !== 0){
				//删除分类页面组件
	      		ReactDOM.unmountComponentAtNode(document.getElementById("app"));
	      		//添加详情页面组件
	      		ReactDOM.render(<Xlayout />,document.getElementById("app"));
			}
		})
	}
})
module.exports = Menu;


//var goodsChild = React.createClass({
//	render : function(){
//		return (
//			
//		)
//	}
//})
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	//添加分类页面组件
	var Flayout = __webpack_require__(1);
	ReactDOM.render(React.createElement(Flayout, null),document.getElementById("app"));



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Search = __webpack_require__(2);
	//var Container = require("./f-container.js");
	var Menu = __webpack_require__(3);
	var Layout = React.createClass({displayName: "Layout",
		render:function(){
			return (
				React.createElement("div", null, 
					React.createElement(Search, null), 
					React.createElement(Menu, null)
				)
			)
		}
	})
	module.exports = Layout;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var styleSheets = {
		searchBig:{
			width:'92%',
			height:'1rem',
			background:'#f9f9f9',
			padding:'0.3rem 4%',
			zIndex:"1000",
			position:"fixed",
			left:"0",
			top:"0"
		},
		searchSmall:{
			display:'flex',
			width:"100%",
			height:'1rem',
			border:'1px solid #e5e5e5',
			boxSizing:'border-box',
			borderRadius:'6px',
			background:'#fff'
		},
		searchImg:{
			paddingLeft:'2%',
			width:'10%',
			height:'0.7rem',
			paddingTop:"0.1rem"
		},
		search:{
			width:'90%',
			height:'0.9rem',
			border:'none',
			outline:'none',
			lineHeight:'0.9rem',
			fontSize:'0.4rem',
			borderRadius:'6px'
		}
	}
	var Search = React.createClass({displayName: "Search",
		render:function(){
			return (
				React.createElement("div", {style: styleSheets.searchBig}, 
					React.createElement("div", {style: styleSheets.searchSmall}, 
						React.createElement("img", {src: "../build/images/f-search.jpg", style: styleSheets.searchImg}), 
						React.createElement("input", {type: "text", style: styleSheets.search, placeholder: "请输入商品名称"})
					)
				)
			)
		}
	})

	module.exports = Search;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

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
	var MenuChild = __webpack_require__(4);
	var Xlayout = __webpack_require__(5);
	var Menu = React.createClass({displayName: "Menu",
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
						React.createElement(MenuChild, {key: i, name: this.state.resolve[i], index: function(res){
					This.setState({
						index:res
					})
				}})
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
									React.createElement("li", {style: styleSheets.goodsLi}, 
										React.createElement("img", {style: styleSheets.goodsImg, src: b[j][1]}), 
										React.createElement("span", {style: styleSheets.goodsSpan}, b[j][0])
									)
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
								React.createElement("div", {style: styleSheets.goods1}, 
									React.createElement("div", {style: styleSheets.title}, kind), 
									React.createElement("ul", {className: "liList", style: styleSheets.goodsUl}, 
										goodsArr1
									)
								)
							)
						}
					}
				}
			return (
				React.createElement("div", {style: styleSheets.container}, 
					React.createElement("ul", {className: "ula", style: styleSheets.menu}, 
						template
					), 
					React.createElement("div", {className: "div", style: styleSheets.goods}, 
						goodsArr
					)
				)
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
		      		ReactDOM.render(React.createElement(Xlayout, null),document.getElementById("app"));
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

/***/ },
/* 4 */
/***/ function(module, exports) {

	var styleSheets = {
		li:{
			width:'100%',
			height:'1.4rem',
	//		paddingLeft:'5%',
			lineHeight:'1.4rem',
			textAlign:'center',
			fontSize:'0.35rem',
			color:'#525252',
			boxSizing:'border-box',
			borderTop:'1px solid #ddd'
		}
	}
	var MenuChild = React.createClass({displayName: "MenuChild",
		render : function(){
		//	console.log(this.props.index);
			return (
				React.createElement("li", {style: styleSheets.li}, 
					this.props.name
				)
			)
		},
		componentDidMount : function(){
			var index = null;
			var This = this;
	//		console.log($(".ula").children("li:first-child"))
			$(".ula").children("li:first-child").css({
				width:'100%',
				height:'1.4rem',
		//		paddingLeft:'5%',
				lineHeight:'1.4rem',
				textAlign:'center',
				fontSize:'0.35rem',
				color:'#fe7320',
				boxSizing:'',
				borderTop:'1px solid #ddd',
				borderRight:'2px solid #fff',
				background:'#fff url(../build/images/f-bg.jpg) no-repeat left top',
				backgroundSize:'0.2rem 1.7rem'
			})
			$(".ula").on('click','li',function(res){
				$(this).css({
					width:'100%',
					height:'1.4rem',
			//		paddingLeft:'5%',
					lineHeight:'1.4rem',
					textAlign:'center',
					fontSize:'0.35rem',
					color:'#fe7320',
					boxSizing:'',
					borderTop:'1px solid #ddd',
					borderRight:'2px solid #fff',
					background:'#fff url(../build/images/f-bg.jpg) no-repeat left top',
					backgroundSize:'0.2rem 1.7rem'
				}).siblings().css({
					width:'100%',
			         height:'1.4remrem',
			//		paddingLeft:'5%',
					lineHeight:'1.4rem',
					textAlign:'center',
					fontSize:'0.35rem',
					color:'#525252',
					boxSizing:'border-box',
					borderTop:'1px solid #ddd',
					borderRight:'',
					background:'',
					backgroundSize:''
				});
				index = $(this).index();
				This.props.index(index);
			})
		}
	})
	module.exports = MenuChild;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Back = __webpack_require__(6);
	var Header = __webpack_require__(7);
	var Location = __webpack_require__(8);
	var Evaluate = __webpack_require__(9);
	var ShoppingCar = __webpack_require__(10);
	var Img = __webpack_require__(11);
	//var Flayout = require('./f-layout.js');
	var Layout = React.createClass({displayName: "Layout",
		render:function(){
			return (
				React.createElement("div", null, 
					React.createElement(Back, null), 		
					React.createElement(Header, null), 
					React.createElement(Location, null), 
					React.createElement(Evaluate, null), 
					React.createElement(Img, null), 
					React.createElement(ShoppingCar, null)
				)
			)
		}
	})
	module.exports = Layout;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var styleSheets = {
		back:{
			width:'100%',
			height:'1rem',
			display:'flex',
			justifyContent:'space-between',
			alignItems:'center',
			flexdirection:'row',
			position:'fixed',
			left:'0',
			top:'0',
			zIndex:'1000'
		},
		leftBack:{
			width:'0.66rem',
			height:'0.66rem',
			marginLeft:'0.25rem',
			borderRadius:'50%',
			background:'#c2c2c2',
			opacity:'0.5'
		},
		icona:{
			display:'block',
			width:'0.66rem',
			height:'0.66rem',
			lineHeight:'0.66rem',
			textAlign:'center',
			fontSize:'0.5rem',
			color:'#fff'
		},
		rightLink:{
			width:'0.66rem',
			height:'0.66rem',
			marginRight:'0.25rem',
			background:'#c2c2c2',
			opacity:'0.5',
			borderRadius:'50%'
		},
		p:{
			height:'0.66rem',
			lineHeight:'0.66rem',
			fontSize:'0.35rem',
			color:"#000",
			display:'none'
		}
	}

	var Back = React.createClass({displayName: "Back",
		render : function(){
			return (
				React.createElement("div", {className: "header", style: styleSheets.back}, 
					React.createElement("div", {className: "fanhui", style: styleSheets.leftBack}, 
						React.createElement("i", {style: styleSheets.icona, className: "iconfont"}, "")
					), 
					React.createElement("p", {style: styleSheets.p}, "商品详情"), 
					React.createElement("div", {className: "fanhui", style: styleSheets.rightLink}, 
						React.createElement("i", {style: styleSheets.icona, className: "iconfont"}, "")
					)
				)
			)
		},
		componentDidMount : function(){
			console.log("2");
			//获取滚动条的高度
			$(window).scroll(function(){
				var scrollTop = $(window).scrollTop(); //获取当前滚动条的距离
	//			console.log(scrollTop);
				if(scrollTop>100){
					$(".header").css({"background":"#fff","opacity":"1"});
					$(".header").find(".fanhui").css("background","");
					$(".header").find("i").css("color","gray");
					$(".header").find("p").css("display","block");
				}else{
					$(".header").css({"background":""});
					$(".header").find(".fanhui").css("background","#c2c2c2");
					$(".header").find("i").css("color","#fff");
					$(".header").find("p").css("display","none");
				}
			});
		}
	})
	module.exports = Back;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var styleSheets = {
		big:{
			width:'100%',
			color:'#606060'
		},
		con:{
			width:'100%',
			height:'6.9rem',
			display:'flex',
			justifyContent:'center',
			alignItems:'center'
		},
		imgSwiper:{
			width:'5.9rem',
			height:'5.9rem'
		},
		smalla:{
			width:'100%',
			height:'1.3rem',
			fontSize:'0.4rem',
			textAlign:'center'
		},
		p1:{
			width:'100%',
			height:'0.65rem',
			lineHeight:'0.65rem'
		},
		p2:{
			width:'100%',
			height:'0.65rem',
			lineHeight:'0.65rem',
			color:'#f14a1d'
		},
		smallb:{
			width:'100%',
			height:'1.2rem',
			fontSize:'0.32rem',
			display:'flex',
			borderTop:"1px solid #e9e9e9"
		},
		smallc:{
			width:'33.3%',
			height:'0.94rem',
			display:'flex',
			flexDirection:'column',
			textAlign:'center',
			background:'url(../build/images/x-bg.jpg) no-repeat right top'
		},
		smalld:{
			width:'33.3%',
			height:'0.94rem',
			display:'flex',
			flexDirection:'column',
			textAlign:'center'
		},
		span1:{
			width:'100%',
			padding:'0.2rem 0 0 0'
		},
		span2:{
			width:'100%',
			padding:'0.1rem 0 0 0',
			color:'#e1e1e1'
		}
	}
	//插件swiper轮播图
	var Header = React.createClass({displayName: "Header",
		getDefaultProps : function(){
			return {
				urlBanner:'/api/banner'
			}
		},
		getInitialState : function(){
			return {
				resolve:''
			}
		},
		componentWillMount : function(){
			var This = this;
			$.ajax({
				url:this.props.urlBanner,
				success:function(res){
	//				console.log(res);
					This.setState({
						resolve : res
					})
				}
			});
		},
		render : function(){
			var template = [];
	//		console.log(this.state.resolve.length)
			if(this.state.resolve){
				for(var i=0;i<this.state.resolve.length;i++){
					template.push(
						React.createElement(Banner, {key: i, name: this.state.resolve[i]})
					)
				}
			}
			return (
				React.createElement("div", {style: styleSheets.big}, 
					React.createElement("div", {className: "swiper-container", style: styleSheets.con}, 
					    React.createElement("div", {className: "swiper-wrapper", style: styleSheets.imgSwiper}, 
					    	template
					    ), 
					    React.createElement("div", {className: "swiper-pagination"})
					), 
					React.createElement("div", {style: styleSheets.smalla}, 
						React.createElement("p", {style: styleSheets.p1}, "车厘子(约)500g/份"), 
						React.createElement("p", {style: styleSheets.p2}, "¥39.80")
					), 
					React.createElement("ul", {style: styleSheets.smallb}, 
						React.createElement("li", {style: styleSheets.smallc}, 
							React.createElement("span", {style: styleSheets.span1}, "产地"), 
							React.createElement("span", {style: styleSheets.span2}, "智利")
						), 
						React.createElement("li", {style: styleSheets.smallc}, 
							React.createElement("span", {style: styleSheets.span1}, "规格"), 
							React.createElement("span", {style: styleSheets.span2}, "500g")
						), 
						React.createElement("li", {style: styleSheets.smalld}, 
							React.createElement("span", {style: styleSheets.span1}, "配送"), 
							React.createElement("span", {style: styleSheets.span2}, "当日达")
						)
					)
				)
			)
		}
	})
	module.exports = Header;

	var Banner = React.createClass({displayName: "Banner",
		render : function(){
			return (
				React.createElement("div", {className: "swiper-slide", style: styleSheets.imgSwiper}, 
		        	React.createElement("img", {style: styleSheets.imgSwiper, src: this.props.name})
		        )
			)
		},
		//写在子组件中轮播图的js控件
		componentDidMount : function(){
			var mySwiper = new Swiper ('.swiper-container', {
				autoplay : true,
				speed : 5000,
			    loop : true,
			    // 如果需要分页器
			    pagination : '.swiper-pagination'
			  })  
		}
	})

/***/ },
/* 8 */
/***/ function(module, exports) {

	var styleSheets = {
		location1:{
			width:'100%',
			height:'1.2rem',
			background:'#f2f3f5',
			display:'flex',
			justifyContent:'cneter',
			alignItems:'center',
			flexDirection:'row',
			color:'#606060'
		},
		location2:{
			width:'100%',
			height:'0.85rem',
			background:'#fff',
			display:'flex',
			justifyContent:'space-between',
			flexDirection:'row',
			alignItems:'center'
		},
		left:{
			width:'60%',
			height:'0.85rem',
			fontSize:'0.29rem',
			display:'flex',
			justifyContent:'cneter',
			alignItems:'center',
			flexDirection:'row'
		},
		leftImg:{
			width:'1rem',
			height:'0.45rem',
			paddingLeft:'0.25rem',
			paddingRight:'0.1rem'
		},
		right:{
			width:'6%'
		},
		spana:{
			paddingLeft:'0.25rem',
			fontSize:'0.29rem',
			color:'#606060'
		}
	}
	var Location = React.createClass({displayName: "Location",
		render:function(){
			return (
				React.createElement("div", null, 
					React.createElement("div", {style: styleSheets.location1}, 
						React.createElement("div", {style: styleSheets.location2}, 
							React.createElement("div", {style: styleSheets.left}, 
								React.createElement("img", {style: styleSheets.leftImg, src: "../build/images/x-details2.jpg"}), 
								React.createElement("span", null, "永辉超市-回龙观店")
							), 
							React.createElement("i", {className: "iconfont", style: styleSheets.right}, "")
						)
					), 
					React.createElement("div", {style: styleSheets.location2}, 
						React.createElement("span", {style: styleSheets.spana}, "现货,超出配送范围可门店自提")
					)
				)
			)
		}
	})
	module.exports = Location;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var styleSheets = {
		evaluate1:{
			width:'100%',
			height:'2.25rem',
			background:'#f2f3f5',
			display:'flex',
			justifyContent:'cneter',
			alignItems:'center',
			color:'#606060'
		},
		evaluate2:{
			width:'100%',
			height:'1.95rem',
			background:'#fff'
		},
		top:{
			width:'100%',
			height:'0.75rem',
			display:'flex',
			justifyContent:'space-between',
			aligItems:'center',
			fontSize:'0.35rem',
			boxSizing:'border-box',
			borderBottom:'1px solid #f2f3f5'
		},
		topDiv1:{
			width:'40%',
			height:'0.75rem',
			lineHeight:'0.75rem',
			paddingLeft:'0.25rem'
		},
		topDiv2:{
			width:'30%',
			height:'0.75rem',
			lineHeight:'0.75rem',
			paddingLeft:'0.25rem'
		},
		span:{
			color:'#e9663b'
		},
		bottom:{
			width:'100%',
			height:'1.2rem',
			fontSize:'0.29rem'
		},
		icon1:{
			display:'block',
			paddingLeft:'0.25rem',
			paddingTop:'0.16rem',
			color:'#ffbb32',
			letterSpacing:'0.12rem'
		},
		p2:{
			paddingLeft:'0.25rem',
			paddingTop:'0.15rem'
		}
	}
	var Evaluate = React.createClass({displayName: "Evaluate",
		render : function(){
			return (
				React.createElement("div", {style: styleSheets.evaluate1}, 
					React.createElement("div", {style: styleSheets.evaluate2}, 
						React.createElement("div", {style: styleSheets.top}, 
							React.createElement("div", {style: styleSheets.topDiv1}, "商品评价(43)"), 
							React.createElement("div", {style: styleSheets.topDiv2}, 
								React.createElement("span", null, "好评率"), 
								React.createElement("span", {style: styleSheets.span}, "100%"), 
								React.createElement("i", {className: "iconfont"}, "")
							)
						), 
						React.createElement("div", {style: styleSheets.bottom}, 
							React.createElement("i", {className: "iconfont", style: styleSheets.icon1}, ""), 
							React.createElement("p", {style: styleSheets.p2}, "这个家伙很懒,一个字都没留下")
						)
					)
				)
			)
		}
	})
	module.exports = Evaluate;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var styleSheets = {
		shoppingCar:{
			width:'100%',
			height:'0.9rem',
			display:'flex',
			justifyContent:'space-between',
			alignItems:'center',
			flexdirection:'row',
			position:'fixed',
			left:'0',
			bottom:'0',
			background:'#fff'
		},
		leftCar:{
			width:'0.9rem',
			height:'0.9rem',
			marginLeft:'0.25rem',
			marginBottom:'0.25rem',
			background:'#4e6110',
			borderRadius:'50%'
		},
		leftIcon:{
			display:'block',
			width:'0.9rem',
			height:'0.9rem',
			lineHeight:'0.9rem',
			textAlign:'center',
			fontSize:'0.6rem',
			color:'#fff'
		},
		rightAdd:{
			width:'2.2rem',
			height:'0.9rem',
			lineHeight:'0.9rem',
			textAlign:'center',
			background:'#4e6110',
			fontSize:'0.35rem',
			color:'#fff'
		}
	}
	var ShoppingCar = React.createClass({displayName: "ShoppingCar",
		render : function(){
			return (
				React.createElement("div", {style: styleSheets.shoppingCar}, 
					React.createElement("div", {style: styleSheets.leftCar}, 
						React.createElement("i", {style: styleSheets.leftIcon, className: "iconfont"}, "")
					), 
					React.createElement("div", {style: styleSheets.rightAdd}, "加入购物车")
				)
			)
		}
	})
	module.exports = ShoppingCar;

/***/ },
/* 11 */
/***/ function(module, exports) {

	var styleSheets = {
		imgBig:{
			width:'100%',
			marginBottom:'1.1rem'
		},
		top1:{
			width:'100%',
			height:'0.75rem',
			lineHeight:'0.75rem',
			textAlign:'center',
			fontSize:'0.32rem',
			color:'#606060'
		},
		imgTu:{
			width:'100%',
			height:'46rem'
		}
	}

	var Img = React.createClass({displayName: "Img",
		render : function(){
			return (
				React.createElement("div", {style: styleSheets.imgBig}, 
					React.createElement("div", {style: styleSheets.top1}, "图文详情"), 
					React.createElement("img", {style: styleSheets.imgTu, src: "../build/images/x-details3.jpg"})
				)
			)
		}
	})
	module.exports = Img;

/***/ }
/******/ ]);
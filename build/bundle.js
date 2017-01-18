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
<<<<<<< HEAD

	var Layout = __webpack_require__(1);
	// var Login = require('./login')
	// var MemberItem = require('./memberItem');
	// var MyOrder = require('./myOrder');
	// var MyWallet = require('./myWallet');
	// var MemberCenter = require('./memberCenter');
	// var Login = require('./login');
	// var UserLogin = require('./userLogin');
	// ReactDOM.render(<Layout />,document.getElementById("app"));
	// ReactDOM.render(<MemberItem />,document.getElementById("memberItem"));
	// ReactDOM.render(<MyOrder />,document.getElementById("myOrder"));
	// ReactDOM.render(<MyWallet />,document.getElementById("myWallet"));
	// ReactDOM.render(<MemberCenter login={function(login){
	//   this.setState({
	//     login : login
	//   })
	// }}/>,document.getElementById("memberCenter"));
	// ReactDOM.render(<Login />,document.getElementById("app"));
	ReactDOM.render(React.createElement(Layout, null),document.getElementById("app"));
	// ReactDOM.render(<Login />,document.getElementById("app"));
	// ReactDOM.render(<UserLogin />,document.getElementById("memberCenter"))


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var MemberItem = __webpack_require__(2);
	var MyOrder = __webpack_require__(3);
	var MyWallet = __webpack_require__(4);
	var MemberCenter = __webpack_require__(5);
	var Layout = React.createClass({displayName: "Layout",
	  getInitialState : function(){
	    return {
	      login : ""
	    }
	  },
	  render : function(){
	    var that = this;
	    console.log(this.state.login)
	    return (
	      React.createElement("div", {style: styleSheets.div}, 
	          React.createElement(MemberCenter, {login: function(login){
	            that.setState({
	              login : login
	            })
	          }}), 
	          React.createElement(MyOrder, null), 
	          React.createElement(MyWallet, null), 
	          React.createElement(MemberItem, null)
	      )
	    )
	  }
	});
	module.exports = Layout;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var MemberItem = React.createClass({displayName: "MemberItem",
	  render : function(){
	    return (
	      React.createElement("div", {style: styleSheets.mcItem}, 
	          React.createElement("div", {style: styleSheets.itemInfo}, React.createElement("span", {className: "iconfont", style: styleSheets.itemSpan}, ""), "我的拼团", React.createElement("span", {className: "iconfont", style: styleSheets.itemSpan2}, "")), 
	          React.createElement("div", {style: styleSheets.itemInfo}, React.createElement("span", {className: "iconfont", style: styleSheets.itemSpan3}, ""), "地址管理", React.createElement("span", {className: "iconfont", style: styleSheets.itemSpan2}, "")), 
	          React.createElement("div", {style: styleSheets.itemInfo}, React.createElement("span", {className: "iconfont", style: styleSheets.itemSpan4}, ""), "意见反馈", React.createElement("span", {className: "iconfont", style: styleSheets.itemSpan2}, "")), 
	          React.createElement("div", {style: styleSheets.itemInfo}, React.createElement("span", {className: "iconfont", style: styleSheets.itemSpan5}, ""), "活动报名", React.createElement("span", {className: "iconfont", style: styleSheets.itemSpan2}, "")), 
	          React.createElement("div", {style: styleSheets.itemInfo}, React.createElement("span", {className: "iconfont", style: styleSheets.itemSpan6}, ""), "会员权益", React.createElement("span", {className: "iconfont", style: styleSheets.itemSpan2}, "")), 
	          React.createElement("div", {style: styleSheets.itemInfo}, React.createElement("span", {className: "iconfont", style: styleSheets.itemSpan7}, ""), "联系客服", React.createElement("span", {style: styleSheets.itemSpan9}, "400-800-5050")), 
	          React.createElement("div", {style: styleSheets.itemInfo}, React.createElement("span", {className: "iconfont", style: styleSheets.itemSpan8}, ""), "关于我们", React.createElement("span", {className: "iconfont", style: styleSheets.itemSpan2}, ""))
	      )
	    )
	  }
	})
	module.exports = MemberItem;
	var styleSheets={
	  mcItem : {
	      "width" : "100%",
	      "height" : "100%",
	      "flex" : "1",
	      "backgroundColor" : "#fff"
	  },
	  itemInfo : {
	       "width" : "97%",
	       "height" : "3rem",
	       "backgroundColor" : "#fff",
	       "marginLeft" : "3%",
	       "lineHeight" : "3rem",
	       "fontSize" : ".9rem",
	       "color" : "#0c0c0c",
	       "borderTop" : "1px solid #f4f4f4"
	   },
	   itemSpan : {
	       "display" : "inline-block",
	       "width" : "1.4rem",
	       "height" : "1.4rem",
	       "textAlign" : "center",
	       "lineHeight" : "1.4rem",
	       "marginRight" : ".6rem",
	       "color" : "#fff",
	       "backgroundColor" : "#ff3d2b",
	       "borderRadius" : "3px"
	   },
	   itemSpan2 : {
	       "position" :"absolute",
	       "right" : ".8rem",
	       "color" : "#d1d1d1"
	   },
	    itemSpan3 : {
	        "display" : "inline-block",
	        "width" : "1.4rem",
	        "height" : "1.4rem",
	        "textAlign" : "center",
	        "lineHeight" : "1.4rem",
	        "marginRight" : ".6rem",
	        "color" : "#fff",
	        "backgroundColor" : "#91d662",
	        "borderRadius" : "3px"
	    },
	    itemSpan4: {
	        "display" : "inline-block",
	        "width" : "1.4rem",
	        "height" : "1.4rem",
	        "textAlign" : "center",
	        "lineHeight" : "1.4rem",
	        "marginRight" : ".6rem",
	        "color" : "#fff",
	        "backgroundColor" : "#33b8ab",
	        "borderRadius" : "3px"
	    },
	    itemSpan5 : {
	        "display" : "inline-block",
	        "width" : "1.4rem",
	        "height" : "1.4rem",
	        "textAlign" : "center",
	        "lineHeight" : "1.4rem",
	        "marginRight" : ".6rem",
	        "color" : "#fff",
	        "backgroundColor" : "#5aa7f1",
	        "borderRadius" : "3px"
	    },
	    itemSpan6 : {
	        "display" : "inline-block",
	        "width" : "1.4rem",
	        "height" : "1.4rem",
	        "textAlign" : "center",
	        "lineHeight" : "1.4rem",
	        "marginRight" : ".6rem",
	        "color" : "#fff",
	        "backgroundColor" : "#fd7cb4",
	        "borderRadius" : "3px"
	    },
	    itemSpan7 : {
	        "display" : "inline-block",
	        "width" : "1.4rem",
	        "height" : "1.4rem",
	        "textAlign" : "center",
	        "lineHeight" : "1.4rem",
	        "marginRight" : ".6rem",
	        "color" : "#fff",
	        "backgroundColor" : "#00a8ff",
	        "borderRadius" : "3px"
	    },
	    itemSpan8 : {
	        "display" : "inline-block",
	        "width" : "1.4rem",
	        "height" : "1.4rem",
	        "textAlign" : "center",
	        "lineHeight" : "1.4rem",
	        "marginRight" : ".6rem",
	        "color" : "#fff",
	        "backgroundColor" : "#ff8a00",
	        "borderRadius" : "3px"
	    },
	    itemSpan9 : {
	        "position" :"absolute",
	        "right" : ".8rem",
	        "color" : "#fa741f"
	    }
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	var MyOrder = React.createClass({displayName: "MyOrder",
	  render : function(){
	    return (
	      React.createElement("div", {style: styleSheets.mcOrder}, 
	          React.createElement("p", {style: styleSheets.myOrder}, React.createElement("span", {className: "iconfont", style: styleSheets.orderSpan1}, ""), "我的订单", React.createElement("span", {style: styleSheets.orderSpan2, className: "iconfont"}, "查看全部订单 ")), 
	          React.createElement("div", {style: styleSheets.orderBox}, 
	              React.createElement("div", {style: styleSheets.orderDIV}, React.createElement("span", {style: styleSheets.orderSpan, className: "iconfont"}, ""), React.createElement("p", null, "待发货")), 
	              React.createElement("div", {style: styleSheets.orderDIV}, React.createElement("span", {style: styleSheets.orderSpan, className: "iconfont"}, ""), React.createElement("p", null, "待自提")), 
	              React.createElement("div", {style: styleSheets.orderDIV}, React.createElement("span", {style: styleSheets.orderSpan, className: "iconfont"}, ""), React.createElement("p", null, "待评价")), 
	              React.createElement("div", {style: styleSheets.orderDIV}, React.createElement("span", {style: styleSheets.orderSpan, className: "iconfont"}, ""), React.createElement("p", null, "退款中"))
	          )
	      )
	    )
	  }
	})
	module.exports = MyOrder;
	var styleSheets={
	  mcOrder : {
	     "width" : "100%",
	     "height" : "8rem",
	   },
	   myOrder : {
	       "width" : "100%",
	       "height" : "3rem",
	       "lineHeight" : "3rem",
	       "backgroundColor" : "white",
	       "fontSize" : ".9rem",
	       "borderBottom" : "1px solid #eeeeee"
	   },
	   orderSpan1 : {
	       "width" : "1.4rem",
	       "height" : "1.4rem",
	       "backgroundColor" : "#53e0fe",
	       "color" : "#fff",
	       "margin" : "0 0.7rem",
	       "borderRadius" : "3px"
	   },
	   orderSpan2 : {
	     "color" : "#a3a3a3",
	     "margin" : "0 0.7rem",
	     "fontSize" : "0.8rem",
	     "position" : "absolute",
	     "right" : "0.3rem"
	   },
	   orderBox : {
	     "display" : "flex",
	     "width" : "100%",
	     "height" : "5rem",
	     "backgroundColor" : "#fff",
	     "fontSize" : "0.8rem",
	     "color" : "#707070"
	   },
	   orderDIV : {
	       "width" : "25%",
	       "height" : "5rem",
	       "textAlign" : "center",
	       "color" : "#656565"
	   },
	   orderSpan : {
	       "display" : "block",
	       "width" : "100%",
	       "height" : "3rem",
	       "color" : "#616161",
	       "textAlign" : "center",
	       "lineHeight" : "3rem",
	       "fontSize" : "1.6rem"
	   }
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	var MyWallet = React.createClass({displayName: "MyWallet",
	  render : function(){
	    return (
	      React.createElement("div", {style: styleSheets.mcWallet}, 
	          React.createElement("p", {style: styleSheets.myWallet}, React.createElement("span", {className: "iconfont", style: styleSheets.walletSpan1}, ""), "我的钱包", React.createElement("span", {style: styleSheets.orderSpan2, className: "iconfont"}, "（登录之后查看您的钱包） ")), 
	          React.createElement("div", {style: styleSheets.orderBox}, 
	              React.createElement("div", {style: styleSheets.orderDIV}, React.createElement("span", {style: styleSheets.orderSpan, className: "iconfont"}, "--"), React.createElement("p", {style: styleSheets.walletP}, "账户余额")), 
	              React.createElement("div", {style: styleSheets.orderDIV}, React.createElement("span", {style: styleSheets.orderSpan, className: "iconfont"}, "--"), React.createElement("p", {style: styleSheets.walletP}, "优惠券")), 
	              React.createElement("div", {style: styleSheets.orderDIV}, React.createElement("span", {style: styleSheets.orderSpan, className: "iconfont"}, "--"), React.createElement("p", {style: styleSheets.walletP}, "积分")), 
	              React.createElement("div", {style: styleSheets.orderDIV}, React.createElement("span", {style: styleSheets.orderSpan, className: "iconfont"}, "--"), React.createElement("p", {style: styleSheets.walletP}, "免邮数"))
	          )
	      )
	    )
	  }
	})
	module.exports = MyWallet;
	var styleSheets={
	  mcWallet : {
	       "width" : "100%",
	       "height" : "8rem",
	       "margin" : "0.6rem 0"
	   },
	   myWallet : {
	       "width" : "100%",
	       "height" : "3rem",
	       "lineHeight" : "3rem",
	       "backgroundColor" : "white",
	       "fontSize" : ".9rem",
	       "borderBottom" : "1px solid #eeeeee",
	   },
	   walletSpan1 : {
	       "width" : "1.4rem",
	       "height" : "1.4rem",
	       "backgroundColor" : "#ffb346",
	       "color" : "#fff",
	       "margin" : "0 0.7rem",
	       "borderRadius" : "3px"
	   },
	   walletP : {
	      "color" : "#9c9c9c"
	   },
	   mcItem : {
	       "width" : "100%",
	       "height" : "100%",
	       "flex" : "1",
	       "backgroundColor" : "#fff"
	   },
	   orderBox : {
	     "display" : "flex",
	     "width" : "100%",
	     "height" : "5rem",
	     "backgroundColor" : "#fff",
	     "fontSize" : "0.8rem",
	     "color" : "#707070"
	   },
	   orderDIV : {
	       "width" : "25%",
	       "height" : "5rem",
	       "textAlign" : "center",
	       "color" : "#656565"
	   },
	   orderSpan : {
	       "display" : "block",
	       "width" : "100%",
	       "height" : "3rem",
	       "color" : "#616161",
	       "textAlign" : "center",
	       "lineHeight" : "3rem",
	       "fontSize" : "1.6rem"
	   },
	   orderSpan2 : {
	     "color" : "#a3a3a3",
	     "margin" : "0 0.7rem",
	     "fontSize" : "0.8rem",
	     "position" : "absolute",
	     "right" : "0.3rem"
	   }
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Login = __webpack_require__(6);
	// var PhoneLogin = require('./phoneLogin');
	var MemberCenter = React.createClass({displayName: "MemberCenter",
	  render : function(){
	    return (
	      React.createElement("div", {style: styleSheets.mcHead}, 
	          React.createElement("img", {src: "../img/m-1.jpg", style: styleSheets.mcHeadImg}), 
	          React.createElement("p", {style: styleSheets.mclog, className: "login"}, "登录/注册"), 
	          React.createElement("span", {style: styleSheets.mcHeadSet, className: "iconfont"}, "㐾"), 
	          React.createElement("div", {style: styleSheets.mcdj}, 
	              React.createElement("dl", {style: styleSheets.mcdjDL}, 
	                  React.createElement("dt", {style: styleSheets.mcdj1}, "0"), 
	                  React.createElement("dd", null, "成长值")
	              ), 
	              React.createElement("dl", {style: styleSheets.mcdjDL2}, 
	                  React.createElement("dt", {style: styleSheets.mcdj1}, "普通会员"), 
	                  React.createElement("dd", null, "会员等级")
	              )
	          )
	      )
	    )
	  },
	  componentDidMount : function(){
	    var that = this;
	    $(".login").on("click",function(){
	      that.props.login("login");
	      ReactDOM.unmountComponentAtNode(document.getElementById("app") )
	      ReactDOM.render(React.createElement(Login, null),document.getElementById("app"))
	    })
	  }
	})
	module.exports = MemberCenter;
	var styleSheets ={
	  mcHead : {
	   "width" : "100%",
	   "height" : "15rem",
	   "background" : "blue",
	   "marginBottom" : ".6rem"
	 },
	 mcHeadImg : {
	   "display" : "block",
	   "width" : "100%",
	   "height" :　"11rem"
	 },
	 mcHeadSet : {
	    "width" : "2rem",
	    "height" : "2rem",
	    "color" : "#fff",
	    "backgroundColor" : "#ff823d",
	    "borderRadius" : "50%",
	    "position" : "absolute",
	    "right" : "1rem",
	    "top" : "1rem",
	    "opacity" : "0"
	 },
	 mclog : {
	   "height" : "1rem",
	   "position" : "absolute",
	   "top" : "7.5rem",
	   "left" : "8rem",
	   "color" : "#e1752d",
	   "opacity" : "0"
	 },
	 mcdj : {
	   "width" : "100%",
	   "height" : "4.1rem",
	   "display" : "flex"
	 },
	 mcdjDL : {
	   "width" : "50%",
	   "height" : "4.1rem",
	   "backgroundColor" : "#fff",
	   "textAlign" : "center",
	   "borderRight" : "1px solid #e8e8e8",
	   "fontSize" : ".8rem"
	 },
	 mcdj1:{
	   "lineHeight" : "2.3rem",
	   "color" : "#f76a0e"
	 },
	  mcdjDL2 : {
	    "width" : "50%",
	    "height" : "4.1rem",
	    "backgroundColor" : "#fff",
	    "textAlign" : "center",
	    "fontSize" : ".8rem"
	  }
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var PhoneLogin = __webpack_require__(7);
	var UserLogin = __webpack_require__(8);
	var Login = React.createClass({displayName: "Login",
	  render : function(){
	    return (
	      React.createElement("div", {style: styleSheets.bg}, 
	          React.createElement("img", {src: "../img/r-1.jpg", style: styleSheets.pos}), 
	          React.createElement("p", {style: styleSheets.logP, className: "box"}, React.createElement("span", {style: styleSheets.logPosSpan, className: "close"}, "X"), React.createElement("span", {className: "iconfont user", style: styleSheets.user}, "企业用户 ")), 
	          React.createElement(PhoneLogin, null), 
	          React.createElement("div", {style: styleSheets.div}, 
	              React.createElement("p", {style: styleSheets.other}, "---------------其他登录方式-------------"), 
	              React.createElement("p", {style: styleSheets.wx}, React.createElement("i", {className: "iconfont", style: styleSheets.icLogo}, ""))
	          )
	      )
	    )
	  }
	})
	module.exports = Login;
	var styleSheets = {
	  pos : {
	      "width" : "100%",
	      "height" : "7.3rem",
	      "position" : "absolute",
	      "left" : "0",
	      "top" : "0",
	      "zIndex" : "1"
	  },
	  logP : {
	       "width" : "100%",
	       "height" : "2.3rem",
	       "position" : "absolute",
	       "opacity" : "0"
	  },
	  logPosSpan : {
	       "display" : "inline-block",
	       "width" : "1.5rem",
	       "height" : "1.5rem",
	       "backgorund" : "#830c10",
	       "color" : "#fff",
	       "border":"1px solid #fad7d0",
	       "borderRadius" : "50%",
	       "textAlign" : "center",
	       "lingHeight" : "1.5rem",
	       "position" : "absolute",
	       "top" : "1rem",
	       "left" : ".6rem"
	   },
	   user : {
	      "position" : "absolute",
	      "right" : ".1rem",
	      "top" : "1.2rem"
	   },
	   bg : {
	      "width" : "100%",
	      "display" : "flex",
	      "flexDirection" : "column",
	      "background" :"url(../img/m-2.jpg)"
	   },
	   div : {
	     "width" : "97%",
	     "height" : "100%",
	     "flex" : "1",
	     "backgroundColor" : "#fff",
	     "paddingTop" : "4rem",
	     "margin" : "0 auto"
	   },
	   other : {
	       "width" : "100%",
	       "height" : "100%",
	       "color" : "#949494",
	       "fontSize" : ".95rem"
	   },
	   wx : {
	     "width" : "100%",
	     "height" : "5rem",
	     "color" : "#7fd364",
	     "textAlign" : "center",
	     "lineHeight" : "5rem",
	     "backgorund" : "#fff",
	   },
	   icLogo : {
	      "display" : "inline-block",
	      "width" :"3.2rem",
	      "height" : "3.2rem",
	      "border" : "1px solid #7fd364",
	      "fontSize" : "2rem",
	      "borderRadius" : "50%",
	      "textAlign" : "center",
	      "lineHeight" : "3.2rem",
	      "margin" : "auto"
	   }
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	var PhoneLogin = React.createClass({displayName: "PhoneLogin",
	  render : function(){
	    return (
	      React.createElement("div", {style: styleSheets.logTop}, 
	      React.createElement("header", {style: styleSheets.logHead}, React.createElement("span", {style: styleSheets.logHeadSpan, className: "pho"}, "手机快捷登录"), React.createElement("span", {style: styleSheets.logHeadSpan, className: "pwd"}, "账号密码登录")), 
	          React.createElement("div", {className: "box1"}, 
	              React.createElement("p", {style: styleSheets.logP}, React.createElement("span", {className: "iconfont", style: styleSheets.logIcon}, ""), React.createElement("input", {type: "text", placeholder: "请输入手机号", style: styleSheets.logInput, className: "pn"})), 
	              React.createElement("p", {style: styleSheets.logP}, React.createElement("span", {className: "iconfont", style: styleSheets.logIcon}, ""), React.createElement("input", {type: "text", placeholder: "请输入验证码", style: styleSheets.logInput}), React.createElement("span", {style: styleSheets.logSpan, className: "yzm"}, "获取验证码")), 
	              React.createElement("p", {style: styleSheets.logQD}, "确定"), 
	              React.createElement("p", {style: styleSheets.ml}, React.createElement("span", {style: styleSheets.whSpan}, "√"), "同意", React.createElement("span", {style: styleSheets.serSpan}, "《永辉生活服务协议》"))
	          ), 
	          React.createElement("div", {style: styleSheets.xs, className: "box2"}, 
	              React.createElement("p", {style: styleSheets.logP2}, React.createElement("span", {className: "iconfont", style: styleSheets.logIcon2}, ""), React.createElement("input", {type: "text", placeholder: "请输入账号", style: styleSheets.logInput2})), 
	              React.createElement("p", {style: styleSheets.logP2, class: ""}, React.createElement("span", {className: "iconfont", style: styleSheets.logIcon2}, ""), React.createElement("input", {type: "text", placeholder: "请输入密码", style: styleSheets.logInput2}), React.createElement("img", {src: "../img/r-2.jpg", style: styleSheets.logSpan2})), 
	              React.createElement("p", {style: styleSheets.logQD2}, "登录"), 
	              React.createElement("p", {style: styleSheets.ml2}, React.createElement("span", {style: styleSheets.whSpan2}, "忘记密码"), React.createElement("span", {style: styleSheets.serSpan2}, "还没有账号?"))
	          )
	      )
	    )
	  },
	  componentDidMount : function(){

	    $(".pho").css({
	      "background" : "#fff",
	      "color" : "#ffb76d"
	    })
	    $(".pho").click(function(){
	      $(this).css({
	        "backgroundColor" : "#fff",
	        "color" : "#ffb76d"
	      }).siblings().css({
	        "backgroundColor" : "",
	        "color" : "#2b2f2d"
	      })
	      $(".box2").css({
	        "display" : "none"
	      })
	      $(".box1").css({
	        "display" : "block"
	      })
	    });
	    $(".pwd").click(function(){
	      $(this).css({
	        "backgroundColor" : "#fff",
	        "color" : "#ffb76d"
	      }).siblings().css({
	        "backgroundColor" : "",
	        "color" : "#2b2f2d"
	      })
	      $(".box1").css({
	        "display" : "none"
	      })
	      $(".box2").css({
	        "display" : "block"
	      })
	    });
	    $(".yzm").click(function(){
	      var yam = /^/g;
	    })
	  }
	})
	module.exports = PhoneLogin;
	var styleSheets={
	   logTop : {
	       "width" : "97%",
	       "height" : "100%",
	       "margin" : "7rem auto 0",
	       "backgroundColor" : "#fff"
	   },
	   logHead : {
	       "width" : "100%",
	       "height" : "3.2rem",
	       "color" : "#2b2f2d",
	       "backgroundColor" : "#fae1cd",
	       "lineHeight" : "3.6rem",
	       "marginBottom" : "1.5rem"
	   },
	   logHeadSpan : {
	      "display" : "inline-block",
	      "width" : "50%",
	      "textAlign" : "center"
	   },
	   logP : {
	      "width" : "88%",
	      "height" : "3rem",
	      "lineHeight" : "3rem",
	      "borderBottom" : "1px solid #f5f5f5",
	      "margin" : "0 auto",
	      "color" :　"#b6b7b5"
	   },
	   logInput : {
	      "border" : "0",
	      "outline": "medium"
	   },
	   logIcon : {
	     "width" : "1.3rem",
	     "height" : "1.2rem",
	     "marginRight" : ".3rem"
	   },
	   logSpan : {
	      "display" : "inline-block",
	      "width" : "5rem",
	      "height" : "2rem",
	      "textAlign" : "center",
	      "lineHeight" : "2rem",
	      "fontSize" : ".8rem",
	      "color" : "#fa7111",
	      "border" : "1px solid #cd8e5f",
	      "borderRadius" : "4px"
	   },
	   logQD : {
	       "width" : "90%",
	       "height" : "3rem",
	       "color" : "#fff",
	       "backgroundColor" : "#fd7722",
	       "textAlign" : "center",
	       "lineHeight" : "3rem",
	       "margin" : "1.5rem auto",
	       "borderRadius" : "5px",
	       "fontSize" : "1rem"
	   },
	   ml : {
	      "marginLeft" : "1.2rem"
	   },
	   whSpan : {
	       "display" : "inline-block",
	       "width" : "1.3rem",
	       "height" : "1.3rem",
	       "color" : "#fff",
	       "borderRadius" : "50%",
	       "fontSize" : ".4rem",
	       "textAlign" : "center",
	       "lineHeight" : "1.3rem",
	       "backgroundColor" : "#fd7722",
	       "marginRight" : ".4rem"
	    },
	    serSpan : {
	        "color" : "#f17525"
	    },
	    xs : {
	        "display" : "none"
	    },
	    logHead2 : {
	        "width" : "100%",
	        "height" : "3.2rem",
	        "color" : "#2b2f2d",
	        "backgroundColor" : "#fae1cd",
	        "lineHeight" : "3.6rem",
	        "marginBottom" : "1.5rem"
	    },
	    logHeadSpan2 : {
	       "display" : "inline-block",
	       "width" : "50%",
	       "textAlign" : "center"
	    },
	    logP2 : {
	       "width" : "88%",
	       "height" : "3rem",
	       "lineHeight" : "3rem",
	       "borderBottom" : "1px solid #f5f5f5",
	       "margin" : "0 auto",
	       "color" :　"#b6b7b5"
	    },
	    logInput2 : {
	       "border" : "0",
	       "outline": "medium"
	    },
	    logIcon2 : {
	      "width" : "1.3rem",
	      "height" : "1.2rem",
	      "marginRight" : ".3rem"
	    },
	    logSpan2 : {
	       "display" : "inline-block",
	       "width" : "1.4rem",
	       "height" : "1.4rem",
	       "fontSize" : "1.4rem",
	       "position" : "absolute",
	       "right" : "2rem",
	       "marginTop" : "4%"
	    },
	    logQD2 : {
	        "width" : "90%",
	        "height" : "3rem",
	        "color" : "#fff",
	        "backgroundColor" : "#fd7722",
	        "textAlign" : "center",
	        "lineHeight" : "3rem",
	        "margin" : "1.5rem auto",
	        "borderRadius" : "5px",
	        "fontSize" : "1rem"
	    },
	    ml2 : {
	       "marginLeft" : "1.2rem",
	       "color" : "#666",
	       "fontSize" : ".8rem"
	    },
	    whSpan2 : {
	        "display" : "inline-block",
	        "height" : "1.3rem",
	        "textAlign" : "center",
	        "lineHeight" : "1.3rem",
	        "marginRight" : ".4rem"
	     },
	     serSpan2 : {
	         "position" : "absolute",
	         "right" : "2rem"
	     }
	}

=======

	
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
>>>>>>> songminmin

/***/ },
/* 8 */
/***/ function(module, exports) {

<<<<<<< HEAD
	var UserLogin = React.createClass({displayName: "UserLogin",
	  render : function(){
	    return (
	      React.createElement("div", {style: styleSheets.user}, 
	        React.createElement("header", {style: styleSheets.head}, React.createElement("span", {className: "iconfont", style: styleSheets.span}, ""), React.createElement("span", null, "企业用户登录")), 
	        React.createElement("p", {style: styleSheets.logP}, React.createElement("span", {className: "iconfont", style: styleSheets.logIcon}, ""), React.createElement("input", {type: "text", placeholder: "请输入手机号", style: styleSheets.logInput})), 
	        React.createElement("p", {style: styleSheets.logP}, React.createElement("span", {className: "iconfont", style: styleSheets.logIcon}, ""), React.createElement("input", {type: "text", placeholder: "请输入密码", style: styleSheets.logInput}), React.createElement("img", {src: "../img/r-2.jpg", style: styleSheets.logImg})), 
	        React.createElement("p", {style: styleSheets.logQD}, "登录"), 
	        React.createElement("p", {style: styleSheets.ml}, "忘记密码")
	      )
	    )
	  }
	})
	module.exports = UserLogin;
	var styleSheets = {
		user : {
	    "width" : "100%",
	    "height" : "100%",
	    "backgroundColor" : "#fff",
	  },
	  head :{
	    "width" : "100%",
	    "height" : "4rem",
	    "marginBottom" : "2rem",
	    "textAlign" : "center",
	    "lineHeight" : "4rem",
	    "color" : "#656565",
	    "fontSize" : "1.2rem"
	  },
	  span : {
	    "fontSize" : "1.6rem",
	    "position" : "absolute",
	    "left" : "1rem"
	  },
	  logP : {
	     "width" : "88%",
	     "height" : "3rem",
	     "lineHeight" : "3rem",
	     "borderBottom" : "1px solid #f5f5f5",
	     "margin" : "0 auto",
	     "color" :　"#b6b7b5"
	  },
	  logInput : {
	     "border" : "0"
	  },
	  logIcon : {
	    "width" : "1.3rem",
	    "height" : "1.2rem",
	    "marginRight" : ".3rem"
	  },
	  logImg : {
	    "display" : "inline-block",
	    "width" : "1.4rem",
	    "height" : "1.4rem",
	    "marginTop" : ".8rem",
	    "position" : "absolute",
	    "right" : "2rem"
	  },
	  logQD : {
	      "width" : "90%",
	      "height" : "3rem",
	      "color" : "#fff",
	      "backgroundColor" : "#fd7722",
	      "textAlign" : "center",
	      "lineHeight" : "3rem",
	      "margin" : "1.5rem auto",
	      "borderRadius" : "5px",
	      "fontSize" : "1rem"
	  },
	  ml : {
	    "width" : "90%",
	    "color" : "#666",
	    "backgroundColor" : "#fff",
	    "margin" : "auto",
	    "borderRadius" : "5px",
	    "fontSize" : ".8rem"
	  }
	}

=======
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
>>>>>>> songminmin

/***/ }
/******/ ]);
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

	var Layout = __webpack_require__(1);
	var MemberItem = __webpack_require__(2);
	var MyOrder = __webpack_require__(3);
	var MyWallet = __webpack_require__(4);
	var MemberCenter = __webpack_require__(5);
	var Login = __webpack_require__(6);
	var UserLogin = __webpack_require__(9);
	ReactDOM.render(React.createElement(Layout, null),document.getElementById("app"));
	// ReactDOM.render(<MemberItem />,document.getElementById("memberItem"));
	// ReactDOM.render(<MyOrder />,document.getElementById("myOrder"));
	// ReactDOM.render(<MyWallet />,document.getElementById("myWallet"));
	// ReactDOM.render(<MemberCenter />,document.getElementById("memberCenter"));
	// ReactDOM.render(<Login />,document.getElementById("memberCenter"));
	ReactDOM.render(React.createElement(UserLogin, null),document.getElementById("memberCenter"))


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Layout = React.createClass({displayName: "Layout",
	  render : function(){
	    return (
	      React.createElement("div", {style: styleSheets.div}, 
	          React.createElement("div", {id: "memberCenter"}), 
	          React.createElement("div", {id: "myOrder"}), 
	          React.createElement("div", {id: "myWallet"}), 
	          React.createElement("div", {id: "memberItem"})
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
	   }
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	var MemberCenter = React.createClass({displayName: "MemberCenter",
	  render : function(){
	    return (
	      React.createElement("div", {style: styleSheets.mcHead}, 
	          React.createElement("img", {src: "../img/m-1.jpg", style: styleSheets.mcHeadImg}), 
	          React.createElement("p", {style: styleSheets.mclog}, "登录/注册"), 
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

	// var PhoneLogin = require('./phoneLogin');
	var PwdLogin = __webpack_require__(8)
	var Login = React.createClass({displayName: "Login",
	  render : function(){
	    return (
	      React.createElement("div", {style: styleSheets.bg}, 
	          React.createElement("img", {src: "../img/r-1.jpg", style: styleSheets.pos}), 
	          React.createElement("p", {style: styleSheets.logP}, React.createElement("span", {style: styleSheets.logPosSpan}, "X"), React.createElement("span", {className: "iconfont", style: styleSheets.user}, "企业用户 ")), 
	          React.createElement(PwdLogin, null), 
	          React.createElement("div", {style: styleSheets.div}, 
	              React.createElement("p", {style: styleSheets.other}, "-----------------其他登录方式----------------"), 
	              React.createElement("p", {style: styleSheets.wx}, React.createElement("i", {className: "iconfont", style: styleSheets.icLogo}, ""))
	          )
	      )
	    )
	  }
	})
	module.exports = Login;
	var styleSheets={
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
	       "height" : "1.3rem"
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
	       "left" : "1rem"
	   },
	   user : {
	      "color" : "#fff",
	      "fontSize" : "1rem",
	      "position" : "absolute",
	      "right" : "1rem",
	      "top" : "1rem"
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
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	var PwdLogin = React.createClass({displayName: "PwdLogin",
	  render : function(){
	    return (
	      React.createElement("div", {style: styleSheets.logTop}, 
	          React.createElement("header", {style: styleSheets.logHead}, React.createElement("span", {style: styleSheets.logHeadSpan}, "手机快捷登录"), React.createElement("span", {style: styleSheets.logHeadSpan}, "账号密码登录")), 
	          React.createElement("p", {style: styleSheets.logP}, React.createElement("span", {className: "iconfont", style: styleSheets.logIcon}, ""), React.createElement("input", {type: "text", placeholder: "请输入手机号", style: styleSheets.logInput})), 
	          React.createElement("p", {style: styleSheets.logP}, React.createElement("span", {className: "iconfont", style: styleSheets.logIcon}, ""), React.createElement("input", {type: "text", placeholder: "请输入密码", style: styleSheets.logInput}), React.createElement("img", {src: "../img/r-2.jpg", style: styleSheets.logSpan})), 
	          React.createElement("p", {style: styleSheets.logQD}, "登录"), 
	          React.createElement("p", {style: styleSheets.ml}, React.createElement("span", {style: styleSheets.whSpan}, "忘记密码"), React.createElement("span", {style: styleSheets.serSpan}, "还没有账号?"))
	      )
	    )
	  }
	})
	module.exports = PwdLogin;
	var styleSheets={
	   logTop : {
	       "width" : "97%",
	       "height" : "100%",
	       "margin" : "6rem auto 0",
	       "backgroundColor" : "#fff"
	   },
	   logHead : {
	       "width" : "100%",
	       "height" : "2.8rem",
	       "color" : "#2b2f2d",
	       "backgroundColor" : "#fae1cd",
	       "lineHeight" : "2.8rem",
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
	      "border" : "0"
	   },
	   logIcon : {
	     "width" : "1.3rem",
	     "height" : "1.2rem",
	     "marginRight" : ".3rem"
	   },
	   logSpan : {
	      "display" : "inline-block",
	      "width" : "1.4rem",
	      "height" : "1.4rem",
	      "fontSize" : "1.4rem",
	      "position" : "absolute",
	      "right" : "2rem",
	      "marginTop" : "4%"
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
	      "marginLeft" : "1.2rem",
	      "color" : "#666",
	      "fontSize" : ".8rem"
	   },
	   whSpan : {
	       "display" : "inline-block",
	       "height" : "1.3rem",
	       "textAlign" : "center",
	       "lineHeight" : "1.3rem",
	       "marginRight" : ".4rem"
	    },
	    serSpan : {
	        "position" : "absolute",
	        "right" : "2rem"
	    }
	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	var UserLogin = React.createClass({displayName: "UserLogin",
	  render : function(){
	    return (
	      React.createElement("div", {style: styleSheets.user}, 
	        React.createElement("header", {style: styleSheets.head}, React.createElement("span", {className: "iconfont", style: styleSheets.span}, ""), React.createElement("span", null, "企业用户登录")), 
	        React.createElement("p", {style: styleSheets.logP}, React.createElement("span", {className: "iconfont", style: styleSheets.logIcon}, ""), React.createElement("input", {type: "text", placeholder: "请输入手机号", style: styleSheets.logInput})), 
	        React.createElement("p", {style: styleSheets.logP}, React.createElement("span", {className: "iconfont", style: styleSheets.logIcon}, ""), React.createElement("input", {type: "text", placeholder: "请输入密码", style: styleSheets.logInput}), React.createElement("img", {src: "../img/r-2.jpg", style: styleSheets.logSpan})), 
	        React.createElement("p", {style: styleSheets.logQD}, "登录"), 
	        React.createElement("p", {style: styleSheets.ml}, React.createElement("span", {style: styleSheets.whSpan}, "忘记密码"))
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
	  logSpan : {
	     "display" : "inline-block",
	     "width" : "1.4rem",
	     "height" : "1.4rem",
	     "fontSize" : "1.4rem",
	     "position" : "absolute",
	     "right" : "2rem",
	     "marginTop" : "4%"
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
	     "marginLeft" : "1.2rem",
	     "color" : "#666",
	     "fontSize" : ".8rem"
	  },
	  whSpan : {
	      "display" : "inline-block",
	      "height" : "1.3rem",
	      "textAlign" : "center",
	      "lineHeight" : "1.3rem",
	      "marginRight" : ".4rem"
	   }
	}


/***/ }
/******/ ]);
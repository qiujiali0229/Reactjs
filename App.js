//App.js里进行配置

//路由配置的核心API
import {Router,Route,hashHistory} from "react-router";

//外部组件
import Index from "./js/h-index";
import Home from "./js/h-home";
import Fenlei from "./js/h-fenlei";
import ShopCar from "./js/h-shopcar";
import Layout from "./js/layout";
import ComponentIndex from "./components/ComponentIndex";
//路由的相关配置

const routes = {
	path : "/",
	component : Index, //路由开始显示的页面,
	// indexRoute : {component:ComponentIndex}, //indexRoute用来进行组件的嵌套，不需要嵌套的话可以不写
	childRoutes : [ //这childRoutes里进行子路由的配置，每一个路由都是一个对象
	//在对象里有path comopent等
		{
			path : "/home",
			component : Home
			// indexRoute : {component:ComponentIndex}
		},
		{
			path : "/fenlei",
			component : Fenlei
		},
		{ 
			path : "/shopcar",
			component : ShopCar
		},
		{
			path : "/layout",
			component : Layout
		}
	]
}

//1.2个参数
//2.把配置好的路由渲染到页面
ReactDOM.render(<Router routes={routes} history={hashHistory}/>,document.getElementById("app"));
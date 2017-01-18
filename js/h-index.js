import {Link} from "react-router";
// import stylesheets from "./h-stylesheets";
class Index extends React.Component{
 	constructor(props){
    	super(props);
  	}
	render(){
		return(

			<div style={stylesheets.wh100}>
				{this.props.children}
				<footer style={stylesheets.footer}>
					<div className="iconfont">&#xe613;<Link style={stylesheets.fl} to="/home">首页</Link></div>
					<div className="iconfont">&#xe668;<Link style={stylesheets.fl} to="/fenlei">分类</Link></div>
					<div className="iconfont">&#xe62a;<Link style={stylesheets.fl} to="/shopcar">购物车</Link></div>
					<div className="iconfont">&#xe607;<Link style={stylesheets.fl} to="/layout">会员中心</Link></div>
				</footer>
			</div>
		)
		
	}
}

export default Index;
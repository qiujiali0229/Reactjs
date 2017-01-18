class Header extends React.Component{
	render(){
		return(
			<header style={stylesheets.header}>
					<div ><img style={stylesheets.img1} src="/build/images/l-index-logo.jpg" /></div>
					<div style={stylesheets.sousuo}>
						<div style={stylesheets.fang} className="iconfont">&#xe612;</div>
						<input type="text" placeholder="搜索所有商品" style={stylesheets.zi}/>
					</div>
					<div style={stylesheets.ma} className="iconfont">&#xe625;</div>
			</header>
		)
	}
}
export default Header;


class Intop extends React.Component{
	render(){
		return(
			<div style={Intopstyle.intopstyle}>
				<div style={Intopstyle.divleft}>
					<div style={Intopstyle.divleftl}>
						<img src="../build/images/l-index-logo2.jpg" style={stylesheets.wh100} />
					</div>
					<div style={Intopstyle.divleftr}>
						<h2 style={Intopstyle.h2}>永辉超市-回龙观店</h2>
						<h4 style={Intopstyle.h4}>月售2986单</h4>
						<div style={Intopstyle.rrdiv}>超出配送,可到门店自取</div>
					</div>
				</div>
				<div style={Intopstyle.divright} className="iconfont">&#xe606;</div>
			</div>
		)
	}
}
export default Intop;
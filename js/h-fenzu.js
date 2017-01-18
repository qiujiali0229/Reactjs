class Fenzu extends React.Component{
	render(){
		return(
			<div>
				<ul style={Fenzustyle.ul}>
					<li style={Fenzustyle.li} >
						<p style={Fenzustyle.p1} style={Fenzustyle.logo}><img src="../build/images/l-index-logo2.jpg" style={Fenzustyle.img} /></p>
						<p style={Fenzustyle.p2}>永辉超市</p>
					</li>
					<li style={Fenzustyle.li} >
						<p style={Fenzustyle.p11} className="iconfont">&#xe697;</p>
						<p style={Fenzustyle.p2}>会员招募</p>
					</li>
					<li style={Fenzustyle.li} >
						<p style={Fenzustyle.p12} className="iconfont">&#xe64e;</p>
						<p style={Fenzustyle.p2}>充值有礼</p>
					</li>
					<li style={Fenzustyle.li} >
						<p style={Fenzustyle.p13} className="iconfont">&#xe61b;</p>
						<p style={Fenzustyle.p2}>发现</p>
					</li>
					<li style={Fenzustyle.li} >
						<p style={Fenzustyle.p14} className="iconfont">&#xe6ed;</p>
						<p style={Fenzustyle.p2}>精品水果</p>
					</li>
					<li style={Fenzustyle.li} >
						<p style={Fenzustyle.p15} className="iconfont">&#xe6c1;</p>
						<p style={Fenzustyle.p2}>粮油干货</p>
					</li>
					<li style={Fenzustyle.li} >
						<p style={Fenzustyle.p16} className="iconfont">&#xe760;</p>
						<p style={Fenzustyle.p2}>精品粮油</p>
					</li>
					<li style={Fenzustyle.li} >
						<p style={Fenzustyle.p17} className="iconfont">&#xe67f;</p>
						<p style={Fenzustyle.p2}>休闲零食</p>
					</li>
				</ul>
			</div>
		)
	}
}
export default Fenzu;
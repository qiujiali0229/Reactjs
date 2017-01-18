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
var Evaluate = React.createClass({
	render : function(){
		return (
			<div style={styleSheets.evaluate1}>
				<div style={styleSheets.evaluate2}>
					<div style={styleSheets.top}>
						<div style={styleSheets.topDiv1}>商品评价(43)</div>
						<div style={styleSheets.topDiv2}>
							<span>好评率</span>
							<span style={styleSheets.span}>100%</span>
							<i className="iconfont">&#xe613;</i>
						</div>
					</div>
					<div style={styleSheets.bottom}>
						<i className="iconfont" style={styleSheets.icon1}>&#xe641;&#xe641;&#xe641;&#xe641;&#xe641;</i>
						<p style={styleSheets.p2}>这个家伙很懒,一个字都没留下</p>
					</div>
				</div>
			</div>
		)
	}
})
module.exports = Evaluate;
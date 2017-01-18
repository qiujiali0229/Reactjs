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
var Location = React.createClass({
	render:function(){
		return (
			<div>
				<div style={styleSheets.location1}>
					<div style={styleSheets.location2}>
						<div style={styleSheets.left}>
							<img style={styleSheets.leftImg} src="../build/images/x-details2.jpg" />
							<span>永辉超市-回龙观店</span>
						</div>
						<i className="iconfont" style={styleSheets.right}>&#xe613;</i>
					</div>
				</div>
				<div style={styleSheets.location2}>
					<span style={styleSheets.spana}>现货,超出配送范围可门店自提</span>
				</div>
			</div>
		)
	}
})
module.exports = Location;
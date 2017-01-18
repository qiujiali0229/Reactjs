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
var ShoppingCar = React.createClass({
	render : function(){
		return (
			<div style={styleSheets.shoppingCar}>
				<div style={styleSheets.leftCar}>
					<i style={styleSheets.leftIcon} className="iconfont">&#xe6e4;</i>
				</div>
				<div style={styleSheets.rightAdd}>加入购物车</div>
			</div>
		)
	}
})
module.exports = ShoppingCar;
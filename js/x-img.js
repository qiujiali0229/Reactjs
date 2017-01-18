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

var Img = React.createClass({
	render : function(){
		return (
			<div style={styleSheets.imgBig}>
				<div style={styleSheets.top1}>图文详情</div>
				<img style={styleSheets.imgTu} src="../build/images/x-details3.jpg" />
			</div>
		)
	}
})
module.exports = Img;
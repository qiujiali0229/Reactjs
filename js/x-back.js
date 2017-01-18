var styleSheets = {
	back:{
		width:'100%',
		height:'1rem',
		display:'flex',
		justifyContent:'space-between',
		alignItems:'center',
		flexdirection:'row',
		position:'fixed',
		left:'0',
		top:'0',
		zIndex:'1000'
	},
	leftBack:{
		width:'0.66rem',
		height:'0.66rem',
		marginLeft:'0.25rem',
		borderRadius:'50%',
		background:'#c2c2c2',
		opacity:'0.5'
	},
	icona:{
		display:'block',
		width:'0.66rem',
		height:'0.66rem',
		lineHeight:'0.66rem',
		textAlign:'center',
		fontSize:'0.5rem',
		color:'#fff'
	},
	rightLink:{
		width:'0.66rem',
		height:'0.66rem',
		marginRight:'0.25rem',
		background:'#c2c2c2',
		opacity:'0.5',
		borderRadius:'50%'
	},
	p:{
		height:'0.66rem',
		lineHeight:'0.66rem',
		fontSize:'0.35rem',
		color:"#000",
		display:'none'
	}
}

var Back = React.createClass({
	render : function(){
		return (
			<div className="header" style={styleSheets.back}>
				<div className="fanhui" style={styleSheets.leftBack}>
					<i style={styleSheets.icona} className="iconfont">&#xe697;</i>
				</div>
				<p style={styleSheets.p}>商品详情</p>
				<div className="fanhui" style={styleSheets.rightLink}>
					<i style={styleSheets.icona} className="iconfont">&#xe6a8;</i>
				</div>
			</div>
		)
	},
	componentDidMount : function(){
		console.log("2");
		//获取滚动条的高度
		$(window).scroll(function(){
			var scrollTop = $(window).scrollTop(); //获取当前滚动条的距离
//			console.log(scrollTop);
			if(scrollTop>100){
				$(".header").css({"background":"#fff","opacity":"1"});
				$(".header").find(".fanhui").css("background","");
				$(".header").find("i").css("color","gray");
				$(".header").find("p").css("display","block");
			}else{
				$(".header").css({"background":""});
				$(".header").find(".fanhui").css("background","#c2c2c2");
				$(".header").find("i").css("color","#fff");
				$(".header").find("p").css("display","none");
			}
		});
	}
})
module.exports = Back;
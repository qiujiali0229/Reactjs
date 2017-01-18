var styleSheets = {
	li:{
		width:'100%',
		height:'1.4rem',
//		paddingLeft:'5%',
		lineHeight:'1.4rem',
		textAlign:'center',
		fontSize:'0.35rem',
		color:'#525252',
		boxSizing:'border-box',
		borderTop:'1px solid #ddd'
	}
}
var MenuChild = React.createClass({
	render : function(){
	//	console.log(this.props.index);
		return (
			<li style={styleSheets.li}>
				{this.props.name}
			</li>
		)
	},
	componentDidMount : function(){
		var index = null;
		var This = this;
//		console.log($(".ula").children("li:first-child"))
		$(".ula").children("li:first-child").css({
			width:'100%',
			height:'1.4rem',
	//		paddingLeft:'5%',
			lineHeight:'1.4rem',
			textAlign:'center',
			fontSize:'0.35rem',
			color:'#fe7320',
			boxSizing:'',
			borderTop:'1px solid #ddd',
			borderRight:'2px solid #fff',
			background:'#fff url(../build/images/f-bg.jpg) no-repeat left top',
			backgroundSize:'0.2rem 1.7rem'
		})
		$(".ula").on('click','li',function(res){
			$(this).css({
				width:'100%',
				height:'1.4rem',
		//		paddingLeft:'5%',
				lineHeight:'1.4rem',
				textAlign:'center',
				fontSize:'0.35rem',
				color:'#fe7320',
				boxSizing:'',
				borderTop:'1px solid #ddd',
				borderRight:'2px solid #fff',
				background:'#fff url(../build/images/f-bg.jpg) no-repeat left top',
				backgroundSize:'0.2rem 1.7rem'
			}).siblings().css({
				width:'100%',
		         height:'1.4remrem',
		//		paddingLeft:'5%',
				lineHeight:'1.4rem',
				textAlign:'center',
				fontSize:'0.35rem',
				color:'#525252',
				boxSizing:'border-box',
				borderTop:'1px solid #ddd',
				borderRight:'',
				background:'',
				backgroundSize:''
			});
			index = $(this).index();
			This.props.index(index);
		})
	}
})
module.exports = MenuChild;
var styleSheets = {
	big:{
		width:'100%',
		color:'#606060'
	},
	con:{
		width:'100%',
		height:'6.9rem',
		display:'flex',
		justifyContent:'center',
		alignItems:'center'
	},
	imgSwiper:{
		width:'5.9rem',
		height:'5.9rem'
	},
	smalla:{
		width:'100%',
		height:'1.3rem',
		fontSize:'0.4rem',
		textAlign:'center'
	},
	p1:{
		width:'100%',
		height:'0.65rem',
		lineHeight:'0.65rem'
	},
	p2:{
		width:'100%',
		height:'0.65rem',
		lineHeight:'0.65rem',
		color:'#f14a1d'
	},
	smallb:{
		width:'100%',
		height:'1.2rem',
		fontSize:'0.32rem',
		display:'flex',
		borderTop:"1px solid #e9e9e9"
	},
	smallc:{
		width:'33.3%',
		height:'0.94rem',
		display:'flex',
		flexDirection:'column',
		textAlign:'center',
		background:'url(../build/images/x-bg.jpg) no-repeat right top'
	},
	smalld:{
		width:'33.3%',
		height:'0.94rem',
		display:'flex',
		flexDirection:'column',
		textAlign:'center'
	},
	span1:{
		width:'100%',
		padding:'0.2rem 0 0 0'
	},
	span2:{
		width:'100%',
		padding:'0.1rem 0 0 0',
		color:'#e1e1e1'
	}
}
//插件swiper轮播图
var Header = React.createClass({
	getDefaultProps : function(){
		return {
			urlBanner:'/api/banner'
		}
	},
	getInitialState : function(){
		return {
			resolve:''
		}
	},
	componentWillMount : function(){
		var This = this;
		$.ajax({
			url:this.props.urlBanner,
			success:function(res){
//				console.log(res);
				This.setState({
					resolve : res
				})
			}
		});
	},
	render : function(){
		var template = [];
//		console.log(this.state.resolve.length)
		if(this.state.resolve){
			for(var i=0;i<this.state.resolve.length;i++){
				template.push(
					<Banner key={i} name={this.state.resolve[i]}/>
				)
			}
		}
		return (
			<div style={styleSheets.big}>
				<div className="swiper-container"  style={styleSheets.con}>
				    <div className="swiper-wrapper" style={styleSheets.imgSwiper}>
				    	{template}
				    </div>
				    <div className="swiper-pagination"></div>
				</div>
				<div style={styleSheets.smalla}>
					<p style={styleSheets.p1}>车厘子(约)500g/份</p>
					<p style={styleSheets.p2}>¥39.80</p>
				</div>
				<ul style={styleSheets.smallb}>
					<li style={styleSheets.smallc}>
						<span style={styleSheets.span1}>产地</span>
						<span style={styleSheets.span2}>智利</span>
					</li>
					<li style={styleSheets.smallc}>
						<span style={styleSheets.span1}>规格</span>
						<span style={styleSheets.span2} >500g</span>
					</li>
					<li style={styleSheets.smalld}>
						<span style={styleSheets.span1}>配送</span>
						<span style={styleSheets.span2}>当日达</span>
					</li>
				</ul>
			</div>
		)
	}
})
module.exports = Header;

var Banner = React.createClass({
	render : function(){
		return (
			<div className="swiper-slide" style={styleSheets.imgSwiper}>
	        	<img style={styleSheets.imgSwiper} src={this.props.name} />
	        </div>
		)
	},
	//写在子组件中轮播图的js控件
	componentDidMount : function(){
		var mySwiper = new Swiper ('.swiper-container', {
			autoplay : true,
			speed : 5000,
		    loop : true,
		    // 如果需要分页器
		    pagination : '.swiper-pagination'
		  })  
	}
})
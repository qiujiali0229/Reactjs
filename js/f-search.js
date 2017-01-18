var styleSheets = {
	searchBig:{
		width:'92%',
		height:'1rem',
		background:'#f9f9f9',
		padding:'0.3rem 4%',
		zIndex:"1000",
		position:"fixed",
		left:"0",
		top:"0"
	},
	searchSmall:{
		display:'flex',
		width:"100%",
		height:'1rem',
		border:'1px solid #e5e5e5',
		boxSizing:'border-box',
		borderRadius:'6px',
		background:'#fff'
	},
	searchImg:{
		paddingLeft:'2%',
		width:'10%',
		height:'0.7rem',
		paddingTop:"0.1rem"
	},
	search:{
		width:'90%',
		height:'0.9rem',
		border:'none',
		outline:'none',
		lineHeight:'0.9rem',
		fontSize:'0.4rem',
		borderRadius:'6px'
	}
}
var Search = React.createClass({
	render:function(){
		return (
			<div style={styleSheets.searchBig}>
				<div style={styleSheets.searchSmall}>
					<img src="../build/images/f-search.jpg" style={styleSheets.searchImg} />
					<input type="text" style={styleSheets.search} placeholder="请输入商品名称" />
				</div>
			</div>
		)
	}
})

module.exports = Search;
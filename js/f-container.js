var styleSheets = {
	container:{
		width:'99.5%',
		display:'flex',
		paddingRight:'0.5%',
		borderTop:'1px solid #ddd'
	}
}
var Menu = require('./f-menu.js');
var Goods = require('./f-goods.js');
var Container = React.createClass({
	
	render : function(){
		var This = this;
		
		return (
			<div style={styleSheets.container}>
				<Menu />
				<Goods />
			</div>
		)
	},
	componentDidMount : function(){
//		console.log(this.state.index+"容器");
	}
})

module.exports = Container;
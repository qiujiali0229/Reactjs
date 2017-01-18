var Back = require('./x-back.js');
var Header = require('./x-header.js');
var Location = require('./x-location.js');
var Evaluate = require('./x-evaluate.js');
var ShoppingCar = require('./x-ShoppingCar.js');
var Img = require('./x-img.js');
//var Flayout = require('./f-layout.js');
var Layout = React.createClass({
	render:function(){
		return (
			<div>
				<Back />		
				<Header />
				<Location />
				<Evaluate />
				<Img />
				<ShoppingCar />
			</div>
		)
	}
})
module.exports = Layout;
var Search = require("./f-search.js");
//var Container = require("./f-container.js");
var Menu = require("./f-menu.js");
var Layout = React.createClass({
	render:function(){
		return (
			<div>
				<Search />
				<Menu />
			</div>
		)
	}
})
module.exports = Layout;
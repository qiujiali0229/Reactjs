var Layout = React.createClass({
  render : function(){
    return (
      <div style={styleSheets.div}>
          <div id="memberCenter"></div>
          <div id="myOrder"></div>
          <div id="myWallet"></div>
          <div id="memberItem"></div>
      </div>
    )
  }
});
module.exports = Layout;

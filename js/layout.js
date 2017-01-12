var Layout = React.createClass({
  render : function(){
    return (
      <div style={styleSheets.div}>
          <div id="memberCenter" style={styleSheets.mcHead}></div>
          <div id="myOrder" style={styleSheets.mcOrder}></div>
          <div id="myWallet" style={styleSheets.mcWallet}></div>
          <div id="memberItem"></div>
      </div>
    )
  }
});
module.exports = Layout;

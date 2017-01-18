var MemberItem = require('./memberItem');
var MyOrder = require('./myOrder');
var MyWallet = require('./myWallet');
var MemberCenter = require('./memberCenter');
var Layout = React.createClass({
  getInitialState : function(){
    return {
      login : ""
    }
  },
  render : function(){
    var that = this;
    console.log(this.state.login)
    return (
      <div style={styleSheets.div}>
          <MemberCenter login={function(login){
            that.setState({
              login : login
            })
          }}/>
          <MyOrder />
          <MyWallet />
          <MemberItem />
      </div>
    )
  }
});
module.exports = Layout;

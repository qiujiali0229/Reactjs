var MemberItem = require('./memberItem');
var MyOrder = require('./myOrder');
var MyWallet = require('./myWallet');
var MemberCenter = require('./memberCenter');
// var Login = require('./login');
// var UserLogin = require('./userLogin');
// ReactDOM.render(<Layout />,document.getElementById("app"));
// ReactDOM.render(<MemberItem />,document.getElementById("memberItem"));
// ReactDOM.render(<MyOrder />,document.getElementById("myOrder"));
// ReactDOM.render(<MyWallet />,document.getElementById("myWallet"));
// ReactDOM.render(<MemberCenter login={function(login){
//   this.setState({
//     login : login
//   })
// }}/>,document.getElementById("memberCenter"));
// ReactDOM.render(<Login />,document.getElementById("memberCenter"));
// ReactDOM.render(<UserLogin />,document.getElementById("memberCenter"))
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

var Layout = require('./layout');
var MemberItem = require('./memberItem');
var MyOrder = require('./myOrder');
var MyWallet = require('./myWallet');
var MemberCenter = require('./memberCenter');
var Login = require('./login');
var UserLogin = require('./userLogin');
ReactDOM.render(<Layout />,document.getElementById("app"));
// ReactDOM.render(<MemberItem />,document.getElementById("memberItem"));
// ReactDOM.render(<MyOrder />,document.getElementById("myOrder"));
// ReactDOM.render(<MyWallet />,document.getElementById("myWallet"));
// ReactDOM.render(<MemberCenter />,document.getElementById("memberCenter"));
// ReactDOM.render(<Login />,document.getElementById("memberCenter"));
ReactDOM.render(<UserLogin />,document.getElementById("memberCenter"))

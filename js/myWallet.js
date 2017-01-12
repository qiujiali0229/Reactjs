var MyWallet = React.createClass({
  render : function(){
    return (
      <div>
          <p style={styleSheets.myWallet}><span className="iconfont" style={styleSheets.walletSpan1}>&#xe61f;</span>我的钱包<span style={styleSheets.orderSpan2} className="iconfont">（登录之后查看您的钱包）&ensp;&#xe670;</span></p>
          <div style={styleSheets.orderBox}>
              <div style={styleSheets.orderDIV}><span style={styleSheets.orderSpan} className="iconfont">--</span><p style={styleSheets.walletP}>账户余额</p></div>
              <div style={styleSheets.orderDIV}><span style={styleSheets.orderSpan} className="iconfont">--</span><p style={styleSheets.walletP}>优惠券</p></div>
              <div style={styleSheets.orderDIV}><span style={styleSheets.orderSpan} className="iconfont">--</span><p style={styleSheets.walletP}>积分</p></div>
              <div style={styleSheets.orderDIV}><span style={styleSheets.orderSpan} className="iconfont">--</span><p style={styleSheets.walletP}>免邮数</p></div>
          </div>
      </div>
    )
  }
})
module.exports = MyWallet;

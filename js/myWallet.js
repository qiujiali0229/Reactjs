var MyWallet = React.createClass({
  render : function(){
    return (
      <div style={styleSheets.mcWallet}>
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
var styleSheets={
  mcWallet : {
       "width" : "100%",
       "height" : "8rem",
       "margin" : "0.6rem 0"
   },
   myWallet : {
       "width" : "100%",
       "height" : "3rem",
       "lineHeight" : "3rem",
       "backgroundColor" : "white",
       "fontSize" : ".9rem",
       "borderBottom" : "1px solid #eeeeee",
   },
   walletSpan1 : {
       "width" : "1.4rem",
       "height" : "1.4rem",
       "backgroundColor" : "#ffb346",
       "color" : "#fff",
       "margin" : "0 0.7rem",
       "borderRadius" : "3px"
   },
   walletP : {
      "color" : "#9c9c9c"
   },
   mcItem : {
       "width" : "100%",
       "height" : "100%",
       "flex" : "1",
       "backgroundColor" : "#fff"
   },
   orderBox : {
     "display" : "flex",
     "width" : "100%",
     "height" : "5rem",
     "backgroundColor" : "#fff",
     "fontSize" : "0.8rem",
     "color" : "#707070"
   },
   orderDIV : {
       "width" : "25%",
       "height" : "5rem",
       "textAlign" : "center",
       "color" : "#656565"
   },
   orderSpan : {
       "display" : "block",
       "width" : "100%",
       "height" : "3rem",
       "color" : "#616161",
       "textAlign" : "center",
       "lineHeight" : "3rem",
       "fontSize" : "1.6rem"
   },
   orderSpan2 : {
     "color" : "#a3a3a3",
     "margin" : "0 0.7rem",
     "fontSize" : "0.8rem",
     "position" : "absolute",
     "right" : "0.3rem"
   }
}

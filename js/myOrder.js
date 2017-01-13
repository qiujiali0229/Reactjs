var MyOrder = React.createClass({
  render : function(){
    return (
      <div style={styleSheets.mcOrder}>
          <p style={styleSheets.myOrder}><span className="iconfont" style={styleSheets.orderSpan1}>&#xe61f;</span>我的订单<span style={styleSheets.orderSpan2} className="iconfont">查看全部订单&ensp;&#xe670;</span></p>
          <div style={styleSheets.orderBox}>
              <div style={styleSheets.orderDIV}><span style={styleSheets.orderSpan} className="iconfont">&#xe66a;</span><p>待发货</p></div>
              <div style={styleSheets.orderDIV}><span style={styleSheets.orderSpan} className="iconfont">&#xe652;</span><p>待自提</p></div>
              <div style={styleSheets.orderDIV}><span style={styleSheets.orderSpan} className="iconfont">&#xe675;</span><p>待评价</p></div>
              <div style={styleSheets.orderDIV}><span style={styleSheets.orderSpan} className="iconfont">&#xe671;</span><p>退款中</p></div>
          </div>
      </div>
    )
  }
})
module.exports = MyOrder;
var styleSheets={
  mcOrder : {
     "width" : "100%",
     "height" : "8rem",
   },
   myOrder : {
       "width" : "100%",
       "height" : "3rem",
       "lineHeight" : "3rem",
       "backgroundColor" : "white",
       "fontSize" : ".9rem",
       "borderBottom" : "1px solid #eeeeee"
   },
   orderSpan1 : {
       "width" : "1.4rem",
       "height" : "1.4rem",
       "backgroundColor" : "#53e0fe",
       "color" : "#fff",
       "margin" : "0 0.7rem",
       "borderRadius" : "3px"
   },
   orderSpan2 : {
     "color" : "#a3a3a3",
     "margin" : "0 0.7rem",
     "fontSize" : "0.8rem",
     "position" : "absolute",
     "right" : "0.3rem"
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
   }
}

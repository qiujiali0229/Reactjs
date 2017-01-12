var MyOrder = React.createClass({
  render : function(){
    return (
      <div style={styleSheets.mcOrder}>
          <p style={styleSheets.myOrder}><span className="iconfont" style={styleSheets.orderSpan1}>&#xe61f;</span>我的订单<span style={styleSheets.orderSpan2} className="iconfont">查看全部订单&ensp;&#xe670;</span></p>
          <div style={styleSheets.orderBox}>
              <div style={styleSheets.orderDIV}><span style={styleSheets.orderSpan} className="iconfont">&#xe66a;</span><p>待发货</p></div>
              <div style={styleSheets.orderDIV}><span style={styleSheets.orderSpan} className="iconfont">&#xe652;</span><p>待自提</p></div>
              <div style={styleSheets.orderDIV}><span style={styleSheets.orderSpan} className="iconfont">&#xe675;</span><p>待评价</p></div>
              <div style={styleSheets.orderDIV}><span style={styleSheets.orderSpan} className="iconfont">&#xe671;</span><p>待发货</p></div>
          </div>
      </div>
    )
  }
})
module.exports = MyOrder;

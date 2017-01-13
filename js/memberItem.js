var MemberItem = React.createClass({
  render : function(){
    return (
      <div  style={styleSheets.mcItem}>
          <div style={styleSheets.itemInfo}><span className="iconfont" style={styleSheets.itemSpan}>&#xe60d;</span>我的拼团<span className="iconfont" style={styleSheets.itemSpan2}>&#xe670;</span></div>
          <div style={styleSheets.itemInfo}><span className="iconfont" style={styleSheets.itemSpan3}>&#xe617;</span>地址管理<span className="iconfont" style={styleSheets.itemSpan2}>&#xe670;</span></div>
          <div style={styleSheets.itemInfo}><span className="iconfont" style={styleSheets.itemSpan4}>&#xe62f;</span>意见反馈<span className="iconfont" style={styleSheets.itemSpan2}>&#xe670;</span></div>
          <div style={styleSheets.itemInfo}><span className="iconfont" style={styleSheets.itemSpan5}>&#xe64d;</span>活动报名<span className="iconfont" style={styleSheets.itemSpan2}>&#xe670;</span></div>
          <div style={styleSheets.itemInfo}><span className="iconfont" style={styleSheets.itemSpan6}>&#xe60e;</span>会员权益<span className="iconfont" style={styleSheets.itemSpan2}>&#xe670;</span></div>
          <div style={styleSheets.itemInfo}><span className="iconfont" style={styleSheets.itemSpan7}>&#xe692;</span>联系客服<span style={styleSheets.itemSpan9}>400-800-5050</span></div>
          <div style={styleSheets.itemInfo}><span className="iconfont" style={styleSheets.itemSpan8}>&#xe610;</span>关于我们<span className="iconfont" style={styleSheets.itemSpan2}>&#xe670;</span></div>
      </div>
    )
  }
})
module.exports = MemberItem;
var styleSheets={
  itemInfo : {
       "width" : "97%",
       "height" : "3rem",
       "backgroundColor" : "#fff",
       "marginLeft" : "3%",
       "lineHeight" : "3rem",
       "fontSize" : ".9rem",
       "color" : "#0c0c0c",
       "borderTop" : "1px solid #f4f4f4"
   },
   itemSpan : {
       "display" : "inline-block",
       "width" : "1.4rem",
       "height" : "1.4rem",
       "textAlign" : "center",
       "lineHeight" : "1.4rem",
       "marginRight" : ".6rem",
       "color" : "#fff",
       "backgroundColor" : "#ff3d2b",
       "borderRadius" : "3px"
   },
   itemSpan2 : {
       "position" :"absolute",
       "right" : ".8rem",
       "color" : "#d1d1d1"
   },
    itemSpan3 : {
        "display" : "inline-block",
        "width" : "1.4rem",
        "height" : "1.4rem",
        "textAlign" : "center",
        "lineHeight" : "1.4rem",
        "marginRight" : ".6rem",
        "color" : "#fff",
        "backgroundColor" : "#91d662",
        "borderRadius" : "3px"
    },
    itemSpan4: {
        "display" : "inline-block",
        "width" : "1.4rem",
        "height" : "1.4rem",
        "textAlign" : "center",
        "lineHeight" : "1.4rem",
        "marginRight" : ".6rem",
        "color" : "#fff",
        "backgroundColor" : "#33b8ab",
        "borderRadius" : "3px"
    },
    itemSpan5 : {
        "display" : "inline-block",
        "width" : "1.4rem",
        "height" : "1.4rem",
        "textAlign" : "center",
        "lineHeight" : "1.4rem",
        "marginRight" : ".6rem",
        "color" : "#fff",
        "backgroundColor" : "#5aa7f1",
        "borderRadius" : "3px"
    },
    itemSpan6 : {
        "display" : "inline-block",
        "width" : "1.4rem",
        "height" : "1.4rem",
        "textAlign" : "center",
        "lineHeight" : "1.4rem",
        "marginRight" : ".6rem",
        "color" : "#fff",
        "backgroundColor" : "#fd7cb4",
        "borderRadius" : "3px"
    },
    itemSpan7 : {
        "display" : "inline-block",
        "width" : "1.4rem",
        "height" : "1.4rem",
        "textAlign" : "center",
        "lineHeight" : "1.4rem",
        "marginRight" : ".6rem",
        "color" : "#fff",
        "backgroundColor" : "#00a8ff",
        "borderRadius" : "3px"
    },
    itemSpan8 : {
        "display" : "inline-block",
        "width" : "1.4rem",
        "height" : "1.4rem",
        "textAlign" : "center",
        "lineHeight" : "1.4rem",
        "marginRight" : ".6rem",
        "color" : "#fff",
        "backgroundColor" : "#ff8a00",
        "borderRadius" : "3px"
    },
    itemSpan9 : {
        "position" :"absolute",
        "right" : ".8rem",
        "color" : "#fa741f"
    }
}

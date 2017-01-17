var PwdLogin = React.createClass({
  render : function(){
    return (
      <div style={styleSheets.logTop}>
          <header style={styleSheets.logHead}><span style={styleSheets.logHeadSpan}>手机快捷登录</span><span style={styleSheets.logHeadSpan}>账号密码登录</span></header>
          <p style={styleSheets.logP}><span className="iconfont" style={styleSheets.logIcon}>&#xe60e;</span><input type="text" placeholder="请输入手机号" style={styleSheets.logInput}/></p>
          <p style={styleSheets.logP} class=""><span className="iconfont" style={styleSheets.logIcon}>&#xe828;</span><input type="text" placeholder="请输入密码" style={styleSheets.logInput}/><img  src="../img/r-2.jpg" style={styleSheets.logSpan}/></p>
          <p style={styleSheets.logQD}>登录</p>
          <p style={styleSheets.ml}><span style={styleSheets.whSpan}>忘记密码</span><span style={styleSheets.serSpan}>还没有账号?</span></p>
      </div>
    )
  }
})
module.exports = PwdLogin;
var styleSheets={
   logTop : {
       "width" : "97%",
       "height" : "100%",
       "margin" : "7.3rem auto 0",
       "backgroundColor" : "#fff"
   },
   logHead : {
       "width" : "100%",
       "height" : "3.2rem",
       "color" : "#2b2f2d",
       "backgroundColor" : "#fae1cd",
       "lineHeight" : "3.6rem",
       "marginBottom" : "1.5rem"
   },
   logHeadSpan : {
      "display" : "inline-block",
      "width" : "50%",
      "textAlign" : "center"
   },
   logP : {
      "width" : "88%",
      "height" : "3rem",
      "lineHeight" : "3rem",
      "borderBottom" : "1px solid #f5f5f5",
      "margin" : "0 auto",
      "color" :　"#b6b7b5"
   },
   logInput : {
      "border" : "0",
      "outline": "medium"
   },
   logIcon : {
     "width" : "1.3rem",
     "height" : "1.2rem",
     "marginRight" : ".3rem"
   },
   logSpan : {
      "display" : "inline-block",
      "width" : "1.4rem",
      "height" : "1.4rem",
      "fontSize" : "1.4rem",
      "position" : "absolute",
      "right" : "2rem",
      "marginTop" : "4%"
   },
   logQD : {
       "width" : "90%",
       "height" : "3rem",
       "color" : "#fff",
       "backgroundColor" : "#fd7722",
       "textAlign" : "center",
       "lineHeight" : "3rem",
       "margin" : "1.5rem auto",
       "borderRadius" : "5px",
       "fontSize" : "1rem"
   },
   ml : {
      "marginLeft" : "1.2rem",
      "color" : "#666",
      "fontSize" : ".8rem"
   },
   whSpan : {
       "display" : "inline-block",
       "height" : "1.3rem",
       "textAlign" : "center",
       "lineHeight" : "1.3rem",
       "marginRight" : ".4rem"
    },
    serSpan : {
        "position" : "absolute",
        "right" : "2rem"
    }
}

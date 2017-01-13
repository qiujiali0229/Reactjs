var PhoneLogin = React.createClass({
  render : function(){
    return (
      <div style={styleSheets.logTop}>
          <header style={styleSheets.logHead}><span style={styleSheets.logHeadSpan}>手机快捷登录</span><span style={styleSheets.logHeadSpan}>账号密码登录</span></header>
          <p style={styleSheets.logP}><span className="iconfont" style={styleSheets.logIcon}>&#xe60e;</span><input type="text" placeholder="请输入手机号" style={styleSheets.logInput}/></p>
          <p style={styleSheets.logP}><span className="iconfont" style={styleSheets.logIcon}>&#xe828;</span><input type="text" placeholder="请输入验证码" style={styleSheets.logInput}/><span style={styleSheets.logSpan}>获取验证码</span></p>
          <p style={styleSheets.logQD}>确定</p>
          <p style={styleSheets.ml}><span style={styleSheets.whSpan}>√</span>同意<span style={styleSheets.serSpan}>《永辉生活服务协议》</span></p>
      </div>
    )
  }
})
module.exports = PhoneLogin;
var styleSheets={
   logTop : {
       "width" : "97%",
       "height" : "100%",
       "margin" : "6rem auto 0",
       "backgroundColor" : "#fff"
   },
   logHead : {
       "width" : "100%",
       "height" : "2.8rem",
       "color" : "#2b2f2d",
       "backgroundColor" : "#fae1cd",
       "lineHeight" : "2.8rem",
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
      "border" : "0"
   },
   logIcon : {
     "width" : "1.3rem",
     "height" : "1.2rem",
     "marginRight" : ".3rem"
   },
   logSpan : {
      "display" : "inline-block",
      "width" : "5rem",
      "height" : "2rem",
      "textAlign" : "center",
      "lineHeight" : "2rem",
      "fontSize" : ".8rem",
      "color" : "#fa7111",
      "border" : "1px solid #cd8e5f",
      "borderRadius" : "4px"
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
      "marginLeft" : "1.2rem"
   },
   whSpan : {
       "display" : "inline-block",
       "width" : "1.3rem",
       "height" : "1.3rem",
       "color" : "#fff",
       "borderRadius" : "50%",
       "fontSize" : ".4rem",
       "textAlign" : "center",
       "lineHeight" : "1.3rem",
       "backgroundColor" : "#fd7722",
       "marginRight" : ".4rem"
    },
    serSpan : {
        "color" : "#f17525"
    }
}

var UserLogin = React.createClass({
  render : function(){
    return (
      <div style={styleSheets.user}>
        <header style={styleSheets.head}><span className="iconfont" style={styleSheets.span}>&#xe604;</span><span>企业用户登录</span></header>
        <p style={styleSheets.logP}><span className="iconfont" style={styleSheets.logIcon}>&#xe60e;</span><input type="text" placeholder="请输入手机号" style={styleSheets.logInput}/></p>
        <p style={styleSheets.logP}><span className="iconfont" style={styleSheets.logIcon}>&#xe828;</span><input type="text" placeholder="请输入密码" style={styleSheets.logInput}/><img  src="../img/r-2.jpg" style={styleSheets.logImg}/></p>
        <p style={styleSheets.logQD}>登录</p>
        <p style={styleSheets.ml}>忘记密码</p>
      </div>
    )
  }
})
module.exports = UserLogin;
var styleSheets = {
	user : {
    "width" : "100%",
    "height" : "100%",
    "backgroundColor" : "#fff",
  },
  head :{
    "width" : "100%",
    "height" : "4rem",
    "marginBottom" : "2rem",
    "textAlign" : "center",
    "lineHeight" : "4rem",
    "color" : "#656565",
    "fontSize" : "1.2rem"
  },
  span : {
    "fontSize" : "1.6rem",
    "position" : "absolute",
    "left" : "1rem"
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
  logImg : {
    "display" : "inline-block",
    "width" : "1.4rem",
    "height" : "1.4rem",
    "marginTop" : ".8rem",
    "position" : "absolute",
    "right" : "2rem"
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
    "width" : "90%",
    "color" : "#666",
    "backgroundColor" : "#fff",
    "margin" : "auto",
    "borderRadius" : "5px",
    "fontSize" : ".8rem"
  }
}

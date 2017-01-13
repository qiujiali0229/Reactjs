// var PhoneLogin = require('./phoneLogin');
var PwdLogin = require('./PwdLogin')
var Login = React.createClass({
  render : function(){
    return (
      <div style={styleSheets.bg}>
          <img src="../img/r-1.jpg" style={styleSheets.pos}/>
          <p style={styleSheets.logP}><span style={styleSheets.logPosSpan}>X</span><span className="iconfont" style={styleSheets.user}>企业用户&ensp;&#xe670;</span></p>
          <PwdLogin />
          <div style={styleSheets.div}>
              <p style={styleSheets.other}>-----------------其他登录方式----------------</p>
              <p style={styleSheets.wx}><i className="iconfont" style={styleSheets.icLogo}>&#xe63b;</i></p>
          </div>
      </div>
    )
  }
})
module.exports = Login;
var styleSheets={
  pos : {
      "width" : "100%",
      "height" : "7.3rem",
      "position" : "absolute",
      "left" : "0",
      "top" : "0",
      "zIndex" : "1"
  },
  logP : {
       "width" : "100%",
       "height" : "1.3rem"
  },
  logPosSpan : {
       "display" : "inline-block",
       "width" : "1.5rem",
       "height" : "1.5rem",
       "backgorund" : "#830c10",
       "color" : "#fff",
       "border":"1px solid #fad7d0",
       "borderRadius" : "50%",
       "textAlign" : "center",
       "lingHeight" : "1.5rem",
       "position" : "absolute",
       "top" : "1rem",
       "left" : "1rem"
   },
   user : {
      "color" : "#fff",
      "fontSize" : "1rem",
      "position" : "absolute",
      "right" : "1rem",
      "top" : "1rem"
   },
   bg : {
      "width" : "100%",
      "display" : "flex",
      "flexDirection" : "column",
      "background" :"url(../img/m-2.jpg)"
   },
   div : {
     "width" : "97%",
     "height" : "100%",
     "flex" : "1",
     "backgroundColor" : "#fff",
     "paddingTop" : "4rem",
     "margin" : "0 auto"
   },
   other : {
       "width" : "100%",
       "height" : "100%",
       "color" : "#949494",
       "fontSize" : ".95rem"
   },
   wx : {
     "width" : "100%",
     "height" : "5rem",
     "color" : "#7fd364",
     "textAlign" : "center",
     "lineHeight" : "5rem",
     "backgorund" : "#fff",

   },
   icLogo : {
      "display" : "inline-block",
      "width" :"3.2rem",
      "height" : "3.2rem",
      "border" : "1px solid #7fd364",
      "fontSize" : "2rem",
      "borderRadius" : "50%",
      "textAlign" : "center",
      "lineHeight" : "3.2rem",
      "margin" : "auto"
   }
}

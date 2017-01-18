var PhoneLogin = React.createClass({
  render : function(){
    return (
      <div style={styleSheets.logTop}>
      <header style={styleSheets.logHead}><span style={styleSheets.logHeadSpan} className="pho">手机快捷登录</span><span style={styleSheets.logHeadSpan} className="pwd">账号密码登录</span></header>
          <div className="box1">
              <p style={styleSheets.logP}><span className="iconfont" style={styleSheets.logIcon}>&#xe60e;</span><input type="text" placeholder="请输入手机号" style={styleSheets.logInput} className="pn"/></p>
              <p style={styleSheets.logP}><span className="iconfont" style={styleSheets.logIcon}>&#xe828;</span><input type="text" placeholder="请输入验证码" style={styleSheets.logInput}/><span style={styleSheets.logSpan} className="yzm">获取验证码</span></p>
              <p style={styleSheets.logQD}>确定</p>
              <p style={styleSheets.ml}><span style={styleSheets.whSpan}>√</span>同意<span style={styleSheets.serSpan}>《永辉生活服务协议》</span></p>
          </div>
          <div  style={styleSheets.xs} className="box2">
              <p style={styleSheets.logP2}><span className="iconfont" style={styleSheets.logIcon2}>&#xe60e;</span><input type="text" placeholder="请输入账号" style={styleSheets.logInput2}/></p>
              <p style={styleSheets.logP2} class=""><span className="iconfont" style={styleSheets.logIcon2}>&#xe828;</span><input type="text" placeholder="请输入密码" style={styleSheets.logInput2}/><img  src="../img/r-2.jpg" style={styleSheets.logSpan2}/></p>
              <p style={styleSheets.logQD2}>登录</p>
              <p style={styleSheets.ml2}><span style={styleSheets.whSpan2}>忘记密码</span><span style={styleSheets.serSpan2}>还没有账号?</span></p>
          </div>
      </div>
    )
  },
  componentDidMount : function(){

    $(".pho").css({
      "background" : "#fff",
      "color" : "#ffb76d"
    })
    $(".pho").click(function(){
      $(this).css({
        "backgroundColor" : "#fff",
        "color" : "#ffb76d"
      }).siblings().css({
        "backgroundColor" : "",
        "color" : "#2b2f2d"
      })
      $(".box2").css({
        "display" : "none"
      })
      $(".box1").css({
        "display" : "block"
      })
    });
    $(".pwd").click(function(){
      $(this).css({
        "backgroundColor" : "#fff",
        "color" : "#ffb76d"
      }).siblings().css({
        "backgroundColor" : "",
        "color" : "#2b2f2d"
      })
      $(".box1").css({
        "display" : "none"
      })
      $(".box2").css({
        "display" : "block"
      })
    });
    $(".yzm").click(function(){
      var yam = /^/g;
    })
  }
})
module.exports = PhoneLogin;
var styleSheets={
   logTop : {
       "width" : "97%",
       "height" : "100%",
       "margin" : "7rem auto 0",
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
    },
    xs : {
        "display" : "none"
    },
    logHead2 : {
        "width" : "100%",
        "height" : "3.2rem",
        "color" : "#2b2f2d",
        "backgroundColor" : "#fae1cd",
        "lineHeight" : "3.6rem",
        "marginBottom" : "1.5rem"
    },
    logHeadSpan2 : {
       "display" : "inline-block",
       "width" : "50%",
       "textAlign" : "center"
    },
    logP2 : {
       "width" : "88%",
       "height" : "3rem",
       "lineHeight" : "3rem",
       "borderBottom" : "1px solid #f5f5f5",
       "margin" : "0 auto",
       "color" :　"#b6b7b5"
    },
    logInput2 : {
       "border" : "0",
       "outline": "medium"
    },
    logIcon2 : {
      "width" : "1.3rem",
      "height" : "1.2rem",
      "marginRight" : ".3rem"
    },
    logSpan2 : {
       "display" : "inline-block",
       "width" : "1.4rem",
       "height" : "1.4rem",
       "fontSize" : "1.4rem",
       "position" : "absolute",
       "right" : "2rem",
       "marginTop" : "4%"
    },
    logQD2 : {
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
    ml2 : {
       "marginLeft" : "1.2rem",
       "color" : "#666",
       "fontSize" : ".8rem"
    },
    whSpan2 : {
        "display" : "inline-block",
        "height" : "1.3rem",
        "textAlign" : "center",
        "lineHeight" : "1.3rem",
        "marginRight" : ".4rem"
     },
     serSpan2 : {
         "position" : "absolute",
         "right" : "2rem"
     }
}

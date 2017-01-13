var MemberCenter = React.createClass({
  render : function(){
    return (
      <div style={styleSheets.mcHead}>
          <img src="../img/m-1.jpg" style={styleSheets.mcHeadImg}/>
          <p style={styleSheets.mclog}>登录/注册</p>
          <span style={styleSheets.mcHeadSet} className="iconfont">&#x343e;</span>
          <div style={styleSheets.mcdj}>
              <dl style={styleSheets.mcdjDL}>
                  <dt style={styleSheets.mcdj1}>0</dt>
                  <dd>成长值</dd>
              </dl>
              <dl style={styleSheets.mcdjDL2}>
                  <dt style={styleSheets.mcdj1}>普通会员</dt>
                  <dd>会员等级</dd>
              </dl>
          </div>
      </div>
    )
  }
})
module.exports = MemberCenter;
var styleSheets ={
  mcHead : {
   "width" : "100%",
   "height" : "15rem",
   "background" : "blue",
   "marginBottom" : ".6rem"
 },
 mcHeadImg : {
   "display" : "block",
   "width" : "100%",
   "height" :　"11rem"
 },
 mcHeadSet : {
    "width" : "2rem",
    "height" : "2rem",
    "color" : "#fff",
    "backgroundColor" : "#ff823d",
    "borderRadius" : "50%",
    "position" : "absolute",
    "right" : "1rem",
    "top" : "1rem",
    "opacity" : "0"
 },
 mclog : {
   "height" : "1rem",
   "position" : "absolute",
   "top" : "7.5rem",
   "left" : "8rem",
   "color" : "#e1752d",
   "opacity" : "0"
 },
 mcdj : {
   "width" : "100%",
   "height" : "4.1rem",
   "display" : "flex"
 },
 mcdjDL : {
   "width" : "50%",
   "height" : "4.1rem",
   "backgroundColor" : "#fff",
   "textAlign" : "center",
   "borderRight" : "1px solid #e8e8e8",
   "fontSize" : ".8rem"
 },
 mcdj1:{
   "lineHeight" : "2.3rem",
   "color" : "#f76a0e"
 },
  mcdjDL2 : {
    "width" : "50%",
    "height" : "4.1rem",
    "backgroundColor" : "#fff",
    "textAlign" : "center",
    "fontSize" : ".8rem"
  }
}

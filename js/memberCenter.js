var MemberCenter = React.createClass({
  render : function(){

    return (
      <div style={styleSheets.div}>
          <img src="../img/m-1.jpg" style={styleSheets.mcHeadImg}/>
          <p style={styleSheets.mclog}>登录/注册</p>
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

'use strict'

module.exports = {
  /**
   * 生成jwt
   * @param {Int} id 
   * @param {String} username 
   */
  generateJWT( id, username ) {
    const { config } = this
    const token = this.jwt.sign( { id, username }, config.jwt.secret )
    return token
  },
  
  /**
   * 验证jwt
   * @param {Object} ctx 
   */
  verifyToken(ctx) {
    const { config } = this
    const token = config.jwt.getToken(ctx)
    if(!token) return null
    return this.jwt.verify( token, config.jwt.secret )
  },

  /**
   * 获取用户信息
   * @param {Object} user 
   * @param {Object} ctx 
   * @param {Int} check 
   * @return {Object} 用户登录/注册反馈
   */
  getUserJson(user, ctx, check) {
    user = user.get()
    const {config} = this
    let token = config.jwt.getToken(ctx)
    if(check === 1){
      if(!token) {
        token = 'Bearer ' + this.generateJWT(user.id, user.username, user.username)
      }
      return {
        token,
        roles: user.userRoles
      }
    } else if(check === 0) {
      return {
        username: user.username,
        email: user.email
      }
    } else {
      return {error:'联系管理员吧'}
    } 
  }

}
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
  }
}
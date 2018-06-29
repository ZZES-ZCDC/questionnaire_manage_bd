'use strict'

module.exports = () => {
  return async function sessionCheck(ctx, next) {
    await next()
    let token = ctx.cookies.get('token')
    if (!token) {
      ctx.render('/admin')
    }
  }
}
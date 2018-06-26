'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  /**
   * 用户登录
   */
  async login() {
    const {ctx, app} = this
    const { password, username } = ctx.request.body
    ctx.validate({
      username: { type: 'string', required: true },
      password: { type: 'string', required: true }
    }, ctx.request.body)
    const result = await ctx.service.user.findByUsername(username)
    if (!ctx.helper.bcompare(password, result.password)) {
      ctx.helper.fail({ctx, res: '用户密码错误'})
      return
    }
    ctx.helper.success({ctx, res: app.getUserJson(result, ctx, 1)})
  }
  /**
   * 用户注册
   */
  async register() {
    const { ctx, app } = this
    const user  = ctx.request.body
    ctx.validate({
      username: { type: 'string', required: true },
      password: { type: 'string', required: true }
    }, user)
    const {username} = user
    const password = ctx.helper.bhash(user.password)
    const newUser = {
      username,
      password
    }
    // 创建用户
    const result = await ctx.service.user.create(newUser)
    ctx.helper.success({ctx, res:app.getUserJson(result, ctx, 0)})
  }

  async loginPage() {
    const { ctx } = this
    await ctx.render('login')
  }
}

module.exports = UserController;

'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  /**
   * 用户登录
   */
  async login() {
    const {
      ctx,
      app
    } = this
    const {
      password,
      username
    } = ctx.request.body
    ctx.validate({
      username: {
        type: 'string',
        required: true
      },
      password: {
        type: 'string',
        required: true
      }
    }, ctx.request.body)
    const result = await ctx.service.user.findByUsername(username)
    if (!ctx.helper.bcompare(password, result.password)) {
      ctx.helper.fail({
        ctx,
        res: '用户密码错误'
      })
      return
    }
    ctx.helper.success({
      ctx,
      res: app.getUserJson(result, ctx, 1)
    })
  }
  /**
   * 用户注册
   */
  async register() {
    const {
      ctx,
      app
    } = this
    const user = ctx.request.body
    ctx.validate({
      username: {
        type: 'string',
        required: true
      },
      password: {
        type: 'string',
        required: true
      }
    }, user)
    const {
      username
    } = user
    const password = ctx.helper.bhash(user.password)
    const newUser = {
      username,
      password
    }
    // 创建用户
    const result = await ctx.service.user.create(newUser)
    ctx.helper.success({
      ctx,
      res: app.getUserJson(result, ctx, 0)
    })
  }
  /**
   * 渲染登陆页面
   */
  async loginPage() {
    const {
      ctx
    } = this
    await ctx.render('login')
  }
  /**
   * 退出登录
   */
  async logout() {
    const {
      ctx
    } = this
    ctx.session = null;
    await ctx.render('login')
  }


  async changePassword() {
    const {
      ctx,
      app
    } = this
    ctx.validate({
      password: {
        type: 'string',
        required: true
      }
    }, ctx.request.body)
    const token = await ctx.cookies.get('token')
    let {
      password
    } = ctx.request.body
    let {
      username
    } = app.verifyTokenByToken(token.split(' ')[1])
    let newPassword = ctx.helper.bhash(password)
    let results = await ctx.service.user.changePasswordByUsername({
      username: username,
      password: newPassword
    })
    if (results) {
      await ctx.render('account', {
        info: '修改成功'
      })
    } else {
      await ctx.render('account', {
        info: '修改失败，请重试'
      })
    }

  }
}

module.exports = UserController;
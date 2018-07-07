'use strict';

const Controller = require('egg').Controller;

class MobileController extends Controller {
  /**
   * 首页
   */
  async home() {
    const {
      ctx
    } = this
    await ctx.render('mobile/home')
  }

  /**
   * 礼物
   */
  async gift() {
    const {
      ctx
    } = this
    await ctx.render('mobile/gift')
  }

  /**
   * 关于
   */
  async about() {
    const {
      ctx
    } = this
    await ctx.render('mobile/about')
  }

  /**
   * 联系
   */
  async contact() {
    const {
      ctx
    } = this
    await ctx.render('mobile/contact')
  }
}

module.exports = MobileController;
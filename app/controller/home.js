'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  /**
   * 首页
   */
  async mainPage() {
    const {
      ctx
    } = this
    await ctx.render('main')
  }

  /**
   * 礼品礼盒页面
   */
  async giftPage() {
    const {
      ctx
    } = this
    await ctx.render('gift')
  }

  /**
   * 关于页面
   */
  async aboutPage() {
    const {
      ctx
    } = this
    await ctx.render('about')
  }

  /**
   * 管理界面layui
   */
  async manage() {
    const {
      ctx
    } = this
    await ctx.render('back')
  }

  /**
   * 管理界面，用户设置
   */
  async account() {
    const {
      ctx
    } = this
    await ctx.render('account')
  }
}

module.exports = HomeController;
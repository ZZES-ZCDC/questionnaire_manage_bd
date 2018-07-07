'use strict';

const Controller = require('egg').Controller;

class MobileController extends Controller {
  async home() {
    const {
      ctx
    } = this
    await ctx.render('mobile/home')
  }
}

module.exports = MobileController;
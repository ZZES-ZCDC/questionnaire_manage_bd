'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  /**
   * 首页
   */
  async mainPage() {
    const {ctx} = this
    await ctx.render('main')
  }

  /**
   * 管理界面
   */
  async managePage() {
    const {ctx} = this
    let token = ctx.cookies.get('token')
    if(token){
      const result = await ctx.curl('http://localhost:7001/question', {
        // 必须指定 method
        method: 'GET',
        // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
        contentType: 'json',
        // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
        dataType: 'json',
        headers: {
          'Authorization': token
        }
      })
      // console.log(result.data)
      await ctx.render('manage', {result: result.data.data})
    } else {
      await ctx.render('login')
    }
  }

  /**
   * 管理界面layui
   */
  async manage() {
    const {ctx} = this
    let token = ctx.cookies.get('token')
    if(token){
      await ctx.render('back')
    } else {
      await ctx.render('login')
    }
  }
}

module.exports = HomeController;

'use strict';

const Controller = require('egg').Controller;

class QuestionController extends Controller {
  /**
   * 录入问卷信息
   */
  async addData() {
    const {ctx} = this
    const question = ctx.request.body
    ctx.validate({
      method: { type: 'string', required: true },
      wish: { type: 'boolean', required: true },
      before: { type: 'boolean', required: true },
      phone: { type: 'number', required: true },
      content: { type: 'string', required: true },
    }, question)
    const result = await ctx.service.question.create(question)
    ctx.helper.success({
      ctx,
      res: result
    })
  }

  /**
   * 渲染获取所有问卷数据
   */
  async getAllData() {
    const {ctx} = this
    const {page, limit} = ctx.query
    let token = ctx.cookies.get('token')
    if(token){
      const result = await ctx.curl(`http://localhost:7001/question/page?page=${page}&limit=${limit}`, {
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
      const count = await ctx.service.question.getAllDataNum()
      ctx.body = {
        code: 0,
        count:count,
        msg:"",
        data:result.data.data
      }
    }
  }

  /**
   * 获取所有问卷数据(有分页)
   */
  async getAllDataByPage() {
    const {ctx} = this
    const {page, limit} = ctx.query
    let offset = page
    const result = await ctx.service.question.getAllDataByPage(offset, limit)
    ctx.helper.success({
      ctx,
      res: result
    })
  }
}

module.exports = QuestionController;

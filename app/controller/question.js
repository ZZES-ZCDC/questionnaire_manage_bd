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
   * 获取所有问卷数据(无分页)
   */
  async getAllData() {
    const {ctx} = this
    const result = await ctx.service.question.getAllData()
    ctx.helper.success({
      ctx,
      res: result
    })
  }

  /**
   * 获取所有问卷数据(有分页)
   */
  async getAllDataByPage() {
    const {ctx} = this
    const {offset, limit} = ctx.query
    const result = await ctx.service.question.getAllDataByPage(offset, limit)
    ctx.helper.success({
      ctx,
      res: result
    })
  }
}

module.exports = QuestionController;

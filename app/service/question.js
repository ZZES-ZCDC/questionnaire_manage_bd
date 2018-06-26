'use strict';

const Service = require('egg').Service;

class QuestionService extends Service {
  /**
   * 录入问卷信息
   * @param {Object} question 问卷信息
   * @return {Object} 问卷信息
   */
  async create(question) {
    return await this.ctx.model.Question.create(question)
  }

  /**
   * 带分页查询所有数据
   * @param {Number} offset 
   * @param {Number} limit 
   * @return 查询结果
   */
  async getAllDataByPage(offset = 0, limit = 10) {
    const { ctx } = this
    const result = await ctx.model.Question.findAll({
      offset: parseInt(offset),
      limit: parseInt(limit)
    })
    return result
  }

  /**
   * 不带分页查询所有数据 
   * @return 查询结果
   */
  async getAllData() {
    const { ctx } = this
    const result = await ctx.model.Question.findAll()
    return result
  }
}

module.exports = QuestionService;

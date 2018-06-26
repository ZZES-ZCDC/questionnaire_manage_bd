'use strict';

const Service = require('egg').Service;

class TestService extends Service {
  /**
   * 添加测试
   * @param {Object} test 
   * @return {Object} 测试信息
   */
  async create(test) {
    return await this.ctx.model.Test.create(user)
  }
}

module.exports = TestService;

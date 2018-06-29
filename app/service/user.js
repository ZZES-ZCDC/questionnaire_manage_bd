'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  /**
   * 创建用户
   * @param {Object} user 用户信息
   * @return {Object} 用户信息
   */
  async create(user) {
    return await this.ctx.model.User.create(user)
  }

  /**
   * 通过用户名查找用户
   * @param {String} username 用户名
   * @return {Object} user 用户信息
   */
  async findByUsername(username) {
    const user = await this.ctx.model.User.findOne({
      where: {
        username
      }
    })
    if (!user) {
      this.ctx.throw(404, 'user not found')
    }
    return user
  }

  /**
   * 通过用户名修改密码
   * @param {Object} obj
   * @return {Object} user
   */
  async changePasswordByUsername(obj) {
    const user = await this.ctx.model.User.update({
      password: obj.password,
    }, {
      where: {
        username: obj.username
      }
    })
    return user
  }
}

module.exports = UserService;
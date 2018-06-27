'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 用户相关
  router.post('/user/login', controller.user.login)        // 登录
  router.post('/user/register', controller.user.register)  // 注册

  // 问卷相关
  router.post('/question', controller.question.addData)    // 录入问卷信息
  // router.get('/question', app.jwt, controller.question.getAllData)  // 获取所有问卷信息
  router.get('/question/page', app.jwt, controller.question.getAllDataByPage) // 获取所有问卷信息（分页）

  // 页面渲染
  router.get('/', controller.home.mainPage)
  router.get('/admin', controller.user.loginPage)
  // router.get('/manage', controller.home.managePage)
  router.get('/back', controller.home.manage)
  router.get('/question', controller.question.getAllData) // 渲染页面获取所有问卷信息（分页）
};

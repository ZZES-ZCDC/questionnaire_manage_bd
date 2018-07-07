'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  const sessionCheck = app.middleware.sessionCheck()
  // 用户相关
  router.post('/user/login', controller.user.login) // 登录
  router.post('/user/register', controller.user.register) // 注册
  router.get('/user/logout', controller.user.logout) //登出
  router.post('/user/reset', controller.user.changePassword) // 修改密码

  // 问卷相关
  router.post('/question', controller.question.addData) // 录入问卷信息
  router.get('/question/page', sessionCheck, controller.question.getAllDataByPage) // 获取所有问卷信息（分页）
  router.get('/question/export', sessionCheck, controller.question.getExcelData) //导出excel

  // 页面渲染
  router.get('/', controller.home.mainPage)
  router.get('/gift', controller.home.giftPage)
  router.get('/about', controller.home.aboutPage)
  router.get('/contact', controller.home.contactPage)
  router.get('/admin', controller.user.loginPage)
  router.get('/back', sessionCheck, controller.home.manage)
  router.get('/account', sessionCheck, controller.home.account)
  router.get('/question', controller.question.getAllData) // layui表格所需接口请求

  // 手机端渲染
  router.get('/m/home', controller.mobile.home)
};
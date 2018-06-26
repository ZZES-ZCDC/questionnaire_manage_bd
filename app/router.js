'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 用户相关
  router.post('/user/login', controller.user.login)        // 登录
  router.post('/user/register', controller.user.register)  // 注册

  // 问卷相关
  
};

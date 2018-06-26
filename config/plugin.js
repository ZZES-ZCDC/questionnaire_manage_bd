'use strict';

// had enabled by egg
exports.static = true;

// sequelize
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}

// 校验插件
exports.validate = {
  enable: true,
  package: 'egg-validate'
}

// jwt插件
exports.jwt = {
  enable: true,
  package: 'egg-jwt'
}

// 子路由
exports.routerPlus = {
  enable: true,
  package: 'egg-router-plus'
}

// 模板引擎
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
}
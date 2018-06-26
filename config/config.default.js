'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1529988682773_9788';

  // add your config here
  config.middleware = ['errorHandler', 'notfoundHandler'];

  // 数据库配置
  config.sequelize = {
    dialect: 'mysql',
    database: process.env.DB_DATABASE || 'questions',
    host: process.env.DB_HOST || '39.108.89.188',
    port: process.env.DB_PORT || '3306',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'zzes1314',
    timezone: '+08:00'
  }
  
  // jwt 配置
  config.jwt = {
    secret: 'zzes',
    getToken( ctx ) {
      if (
        ctx.headers.autorization && 
        ( ctx.headers.authorization.split( ' ' )[0] === 'Bearer' ||
        ctx.headers.authorization.split( ' ' )[0] === 'Token')
      ){
        return ctx.headers.authorization.split( ' ' )[1]
      } else if ( ctx.query && ctx.query.token ) {
        return ctx.query.token
      }
      return null
    }
  }
  
  // csrf关闭
  config.security = {
    csrf: {
      enable: false
    }
  }

  return config;
};

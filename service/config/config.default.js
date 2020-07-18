/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594095619862_412';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 跨域的配置
   

config.security = {
  csrf: {
    enable: false,
    ignoreJSON: true,
  },
};
config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};

config.bodyParser= {
  jsonLimit:'5mb',
  formLimit:'5mb',
};
//数据库配置
config.mysql={
  //但数据库信息配置
  client:{
    // host
    host:'localhost',
    // 端口号
    port:'3306',
    // 用户名
    user:'root',
    // 密码
    password:'root',
    // 数据库名
    database:'user',
  },
  // 是否加载到app上，默认开启
  app:true,
  // 是否加载到agent 上，默认关闭
  agent:false,
};

  return {
    ...config,
    ...userConfig,
  };
};

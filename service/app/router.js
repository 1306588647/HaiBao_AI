"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  //第一个值为路由份之情况单引号之中的值
  //get post
  // router.请求类型('/接口名',控制层在哪找到这个方法的位置)
  // 路由做分支请求
  const {
    router,
    controller
  } = app;
  //查找账号和密码
  router.post('/search',controller.project.search);
  // 注册账号
  router.post('/searchAccount',controller.project.searchAccount);
  //注册添加
  router.post('/add',controller.project.add);
  //修改密码
  router.post('/changePassword',controller.project.changePassword);
  //修改头像
  router.post('/changeheadimg',controller.project.changeheadimg);
  //ai植物识别
  router.post('/plant',controller.ai.plant);
  // ai菜品识别
  router.post('/food',controller.ai.food);
  //ai货币识别
  router.post('/money',controller.ai.money);
  //ai动物识别
  router.post('/animal',controller.ai.animal);
  //ai logo识别
  router.post('/logo',controller.ai.logo);
  //ai手势识别
  router.post('/hand',controller.ai.hand);
  // ai人脸动漫化
  router.post('/Anime',controller.ai.Anime);
  // ai黑白图片上色
  router.post('/whiteblack',controller.ai.whiteblack);
  // ai图片去雾
  router.post('/removefog',controller.ai.removefog);
  // ai清晰度增加
  router.post('/clear',controller.ai.clear);
  
};
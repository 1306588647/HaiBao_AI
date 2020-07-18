'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  //登陆查找
  async search() {
    const{ctx}=this;
    const res = await ctx.service.project.search(ctx.request.body);
    ctx.body=res;
  }

  //注册查找账号
  async searchAccount() {
    const{ctx}=this;
    const res = await ctx.service.project.searchAccount(ctx.request.body);
    ctx.body=res;
  }

  //添加注册
  async add(){
    const{ctx}=this;
    const res = await ctx.service.project.add(ctx.request.body);
    ctx.body=res;
  }

  //修改密码
  async changePassword(){
    const{ctx}=this;
    const res = await ctx.service.project.changePassword(ctx.request.body);
    ctx.body=res;
  }

  //修改头像
  async changeheadimg(){
    const{ctx}=this;
    const res = await ctx.service.project.changeheadimg(ctx.request.body);
    ctx.body=res;
  }
}

module.exports = ProjectController;

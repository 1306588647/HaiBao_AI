'use strict';

const Controller = require('egg').Controller;

class AiController extends Controller {
  // 植物识别
  async plant() {
    const {
      ctx
    } = this;
    const res = await ctx.service.ai.plant(ctx.request.body);
    ctx.body = res;
  }

  // 菜品识别
  async food() {
    const {
      ctx
    } = this;
    const res = await ctx.service.ai.food(ctx.request.body);
    ctx.body = res;
  }

  // 货币识别
  async money() {
    const {
      ctx
    } = this;
    const res = await ctx.service.ai.money(ctx.request.body);
    ctx.body = res;
  }

  // 动物识别
  async animal() {
    const {
      ctx
    } = this;
    const res = await ctx.service.ai.animal(ctx.request.body);
    ctx.body = res;
  }

  // 手势识别
  async hand() {
    const {
      ctx
    } = this;
    const res = await ctx.service.ai.hand(ctx.request.body);
    ctx.body = res;
  }
  // logo识别
  async logo() {
    const {
      ctx
    } = this;
    const res = await ctx.service.ai.logo(ctx.request.body);
    ctx.body = res;
  }

  // 人脸动漫化
  async Anime() {
    const {
      ctx
    } = this;
    const res = await ctx.service.ai.Anime(ctx.request.body);
    ctx.body = res;
  }

   // 黑白图片上色
   async whiteblack() {
    const {
      ctx
    } = this;
    const res = await ctx.service.ai.whiteblack(ctx.request.body);
    ctx.body = res;
  }

  // 图片去雾
  async removefog() {
    const {
      ctx
    } = this;
    const res = await ctx.service.ai.removefog(ctx.request.body);
    ctx.body = res;
  }

   // 图片清晰度增加
   async clear() {
    const {
      ctx
    } = this;
    const res = await ctx.service.ai.clear(ctx.request.body);
    ctx.body = res;
  }


}

module.exports = AiController;
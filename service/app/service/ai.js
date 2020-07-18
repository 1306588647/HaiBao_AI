'use strict';

const Service = require('egg').Service;

class AiService extends Service {
  //识别植物
  async plant(data) {
    const {
      ctx
    } = this;
    const access_token = "24.e679973064effc5963e2a37ef380ea11.2592000.1597235715.282335-21191377";
    const res = ctx.curl('https://aip.baidubce.com/rest/2.0/image-classify/v1/plant?access_token=' + access_token, {
      method: 'POST',
      dataType: 'json',
      // header: {
      //   'Content-Type': 'application/x-www-form-urlencoded',
      // },
      data: {
        image: data.image
      },
    }).then(cg => {
      console.log(cg);
      return cg;
    }).catch(err => {
      console.log(err);
      return err;
    });
    return res;
  }

  // 菜品识别
  async food(data) {
    const {
      ctx
    } = this;
    const access_token = "24.e679973064effc5963e2a37ef380ea11.2592000.1597235715.282335-21191377";
    const res = ctx.curl('https://aip.baidubce.com/rest/2.0/image-classify/v2/dish?access_token=' + access_token, {
      method: 'POST',
      dataType: 'json',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        image: data.image,
        filter_threshold: 0.95
      },
    }).then(cg => {
      console.log(cg);
      return cg;
    }).catch(err => {
      console.log(err);
      return err;
    });
    return res;
  }

  // 货币识别
  async money(data) {
    const {
      ctx
    } = this;
    const access_token = "24.e679973064effc5963e2a37ef380ea11.2592000.1597235715.282335-21191377";
    const res = ctx.curl('https://aip.baidubce.com/rest/2.0/image-classify/v1/currency?access_token=' + access_token, {
      method: 'POST',
      dataType: 'json',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        image: data.image,
      },
    }).then(cg => {
      console.log(cg);
      return cg;
    }).catch(err => {
      console.log(err);
      return err;
    });
    return res;
  }

  // 动物识别
  async animal(data) {
    const {
      ctx
    } = this;
    const access_token = "24.e679973064effc5963e2a37ef380ea11.2592000.1597235715.282335-21191377";
    const res = ctx.curl('https://aip.baidubce.com/rest/2.0/image-classify/v1/animal?access_token=' + access_token, {
      method: 'POST',
      dataType: 'json',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        image: data.image,
      },
    }).then(cg => {
      console.log(cg);
      return cg;
    }).catch(err => {
      console.log(err);
      return err;
    });
    return res;
  }

  // 手势识别
  async hand(data) {
    const {
      ctx
    } = this;
    const access_token = "24.d37059048eb2d45666d03fd65acb8180.2592000.1597290869.282335-21318989";
    const res = ctx.curl('https://aip.baidubce.com/rest/2.0/image-classify/v1/gesture?access_token=' + access_token, {
      method: 'POST',
      dataType: 'json',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        image: data.image,
      },
    }).then(cg => {
      console.log(cg);
      return cg;
    }).catch(err => {
      console.log(err);
      return err;
    });
    return res;
  }
  // logo识别
  async logo(data) {
    const {
      ctx
    } = this;
    const access_token = "24.e679973064effc5963e2a37ef380ea11.2592000.1597235715.282335-21191377";
    const res = ctx.curl('https://aip.baidubce.com/rest/2.0/image-classify/v2/logo?access_token=' + access_token, {
      method: 'POST',
      dataType: 'json',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        image: data.image,
      },
    }).then(cg => {
      console.log(cg);
      return cg;
    }).catch(err => {
      console.log(err);
      return err;
    });
    return res;
  }
  // 人脸动漫化
  async Anime(data) {
    const {
      ctx
    } = this;
    const access_token = "24.90aa476ee265f132de6708956d9cb2eb.2592000.1597292231.282335-21319428";
    const res = ctx.curl('https://aip.baidubce.com/rest/2.0/image-process/v1/selfie_anime?access_token=' + access_token, {
      method: 'POST',
      dataType: 'json',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        image: data.image,
      },
    }).then(cg => {
      // console.log(cg);
      return cg;
    }).catch(err => {
      // console.log(err);
      return err;
    });
    return res;
  }

  // 黑白图片上色
  async whiteblack(data) {
    const {
      ctx
    } = this;
    const access_token = "24.90aa476ee265f132de6708956d9cb2eb.2592000.1597292231.282335-21319428";
    const res = ctx.curl('https://aip.baidubce.com/rest/2.0/image-process/v1/colourize?access_token=' + access_token, {
      method: 'POST',
      dataType: 'json',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        image: data.image,
      },
    }).then(cg => {
      console.log(cg);
      return cg;
    }).catch(err => {
      console.log(err);
      return err;
    });
    return res;
  }

   // 图像去雾
   async removefog(data) {
    const {
      ctx
    } = this;
    const access_token = "24.90aa476ee265f132de6708956d9cb2eb.2592000.1597292231.282335-21319428";
    const res = ctx.curl('https://aip.baidubce.com/rest/2.0/image-process/v1/dehaze?access_token=' + access_token, {
      method: 'POST',
      dataType: 'json',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        image: data.image,
      },
    }).then(cg => {
      return cg;
    }).catch(err => {
      return err;
    });
    return res;
  }

  // 图像清晰度增加
  async clear(data) {
    const {
      ctx
    } = this;
    const access_token = "24.90aa476ee265f132de6708956d9cb2eb.2592000.1597292231.282335-21319428";
    const res = ctx.curl('https://aip.baidubce.com/rest/2.0/image-process/v1/image_definition_enhance?access_token=' + access_token, {
      method: 'POST',
      dataType: 'json',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        image: data.image,
      },
    }).then(cg => {
      return cg;
    }).catch(err => {
      return err;
    });
    return res;
  }
}


module.exports = AiService;
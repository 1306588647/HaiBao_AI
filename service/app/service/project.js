'use strict';

const Service = require('egg').Service;

class ProjectService extends Service {
  // 登陆账号和密码
  async search(data) {
    const {
      ctx
    } = this;
    const res = ctx.app.mysql.select('user', {
      where: {
        account: data.account,
        password: data.password
      }

    }).then(res => {
      if (res.length === 0) {
        return {
          msg: '没找到',
          succ: false
        };
      } else if (res.length !== 0) {
        return {
          data: res,
          msg: '查找成功',
          succ: true
        };
      }
    }).catch(err => {
      return err;
    });
    return res;
  }

  // 查找账号
  async searchAccount(data) {
    const {
      ctx
    } = this;
    const res = ctx.app.mysql.select('user', {
      where: {
        account: data.account,
      }

    }).then(res => {
      if (res.length === 0) {
        return {
          msg: '没找到',
          succ: false
        };
      } else if (res.length !== 0) {
        return {
          data: res,
          msg: '查找成功',
          succ: true
        };
      }
    }).catch(err => {
      return err;
    });
    return res;
  }

  // 注册添加
  async add(data) {
    const {
      ctx
    } = this;
    const res = ctx.app.mysql.insert('user', data).then(res => {
      return {
        res,
        msg: '插入成功',
        succ: true,
      };
    }).catch(res => {
      return {
        res,
        msg: '插入失败',
        succ: false,
      };
    });
    return res;

  }

  // 修改密码
  async changePassword(data) {
    const {
      ctx
    } = this;
    const res = ctx.app.mysql.update('user', {
      id:data.id,
      password: data.password
    }).then(res => {
      if (res.changedRows === 1) {
        return {
          msg: '修改成功',
          succ: true
        };
      } else if (res.changedRows !== 1) {
        return {
          msg: '修改失败',
          succ: false
        };
      }
    }).catch(error => {
      console.log(error);
    });
    return res;
  }

  // 修改头像
  async changeheadimg(data) {
    const {
      ctx
    } = this;
    const res = ctx.app.mysql.update('user', {
      id:data.id,
      headimg: data.headimg
    }).then(res => {
      if (res.changedRows === 1) {
        return {
          msg: '修改成功',
          succ: true
        };
      } else if (res.changedRows !== 1) {
        return {
          msg: '修改失败',
          succ: false
        };
      }
    }).catch(error => {
      console.log(error);
    });
    return res;
  }
}

module.exports = ProjectService;
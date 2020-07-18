// pages/forgetpassword/forgetpassword.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        number: {
            account: "", //账号
            password: "", //密码  
            truepassword: "" //确认密码
        }
    },

    //获取账号
    getAccount: function (re) {
        var username = "number.account";
        this.setData({
            [username]: re.detail.value
        });
    },
    //获取密码
    getPassWord: function (re) {
        var password = "number.password";
        this.setData({
            [password]: re.detail.value
        });
    },
    //获取确认密码
    getTruePassWord: function (re) {
        var truepassword = "number.truepassword";
        this.setData({
            [truepassword]: re.detail.value
        });
    },

    // 修改密码
    changePassword: function () {
        var account = this.data.number.account;
        var password = this.data.number.password;
        var truepassword = this.data.number.truepassword;
        if ((account == "") || (password == "") || (truepassword == "")) {
            console.log("空值");
            //弹窗
            wx: wx.showModal({
                title: '提示:',
                content: '账号或者密码或确认密码为空',
                showCancel: false,
            })
        } else if (password != truepassword) {
            //弹窗
            wx: wx.showModal({
                title: '提示:',
                content: '密码和确认密码不相等',
                showCancel: false,
            })
        } else {
            // 向服务器发送请求搜索要修改的账号
            wx: wx.request({
                url: 'http://127.0.0.1:7001/searchAccount',
                method: 'POST',
                data: {
                    account: account,
                },
                success: (res) => {
                    if (res.data.succ == false) {
                        wx: wx.showModal({
                            title: '提示:',
                            content: '账号不存在，请先注册',
                            showCancel: false,
                        })
                    }
                    else {
                        //获取查找到账号的主键id
                        var id = res.data.data[0].id;
                        // 向服务器发送请求修改密码
                        wx.request({
                            url: 'http://127.0.0.1:7001/changePassword',
                            method: 'POST',
                            data: {
                                id: id,
                                password: password
                            },
                            success: (res) => {
                                // 如果修改成功，则提示成功
                                if (res.data.succ == true) {
                                    wx: wx.showModal({
                                        title: '提示:',
                                        content: '密码修改成功',
                                        showCancel: false,
                                        success: (res) => {
                                            //如果密码修改成功点击确认，关闭其他页面，并跳转到登录页面
                                            console.log(res);
                                            if (res.confirm == true) {
                                                wx.reLaunch({
                                                    url: "../index/index"
                                                })
                                            }
                                        }
                                    });

                                }
                                else{
                                    // 如果修改失败，则重新修改密码
                                    wx: wx.showModal({
                                        title: '提示:',
                                        content: '密码修改失败，请重新修改密码',
                                        showCancel: false,
                                    })
                                }
                            }

                        })
                    }
                }
            })
        }

    },





    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
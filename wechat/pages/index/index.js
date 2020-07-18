// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        number: {
            account: "", //账号
            password: "" //密码
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
    //登陆
    login: function () {
        var account = this.data.number.account;
        var password = this.data.number.password
        //如果输入框其中一个没有输入值，那么提示为空
        if ((account == "") || (password == "")) {
            console.log("空值");
            //弹窗
            wx: wx.showModal({
                title: '提示:',
                content: '账号或者密码为空',
                showCancel: false,
            })
        } else {
            //向服务器发送查找账号请求
            wx.request({
                url: 'http://127.0.0.1:7001/searchAccount',
                method: 'POST',
                data: {
                    account: account
                },
                success: (res) => {
                    //如果没有找到账号，则提示账户不存在
                    if (res.data.succ == false) {
                        wx: wx.showModal({
                            title: '提示:',
                            content: '账户不存在',
                            showCancel: false,
                        })
                    }
                    else {
                        // 如果账户存在，则向服务器发送查找账号和密码是否匹配请求
                        wx.request({
                            url: 'http://127.0.0.1:7001/search',
                            method: 'POST',
                            data: {
                                account: account,
                                password: password,
                            },
                            success: (res) => {
                                // 如果账号和密码不匹配则密码错误
                                if (res.data.succ == false) {
                                    wx.showModal({
                                        title: '提示:',
                                        content: '密码错误',
                                        showCancel: false,
                                    })
                                } else {
                                    // 如果账号和密码匹配，则登陆成功
                                    wx.showModal({
                                        title: '提示:',
                                        content: '登陆成功，即将跳转',
                                        showCancel: false,
                                        success: () => {
                                            wx: wx.reLaunch({
                                                // 此处后面携带参数，将account账号传给user页面
                                                url: '../user/user?account=' + this.data.number.account,
                                            })
                                        }
                                    })
                                }
                            }
                        })


                    }
                }
            })
        }
    },

    // 跳转到注册页面
    goto_register: function () {
        wx.navigateTo({
            url: "../register/register"
        })
    },

    //跳转到找回密码页面
    goto_forget_password: function () {
        wx.navigateTo({
            url: "../forgetpassword/forgetpassword"
        })
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
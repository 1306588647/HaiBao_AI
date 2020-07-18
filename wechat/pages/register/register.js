// pages/register/register.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        headimg: "https://pics.images.ac.cn/image/5f08831e6cd62.html", //图片地址
        number: {
            account: "", //账号
            password: "", //密码  
            truepassword: "", //确认密码
        }

    },
    //添加图片函数
    addImage: function () {
        wx.chooseImage({
            success: (res) => {
                // 将添加的头像显示在界面上
                this.setData({
                    headimg: res.tempFilePaths[0]
                })
            }
        })

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

    // 注册
    register: function () {
        var account = this.data.number.account;
        var password = this.data.number.password;
        var truepassword = this.data.number.truepassword;
        var headimg = this.data.headimg;

        // 如果四个必填项目中有一个没有填写，则为空
        if ((account == "") || (password == "") || (truepassword == "")||(headimg=="https://pics.images.ac.cn/image/5f08831e6cd62.html")) {
            console.log("空值");
            //弹窗
            wx: wx.showModal({
                title: '提示:',
                content: '账号或者密码或确认密码为空或未上传头像',
                showCancel: false,
            })
            
        } 
        // 如果密码和确认密码不相等，则报错
        else if (password != truepassword) {
            console.log("密码和确认密码不相等");
            //弹窗
            wx: wx.showModal({
                title: '提示:',
                content: '密码和确认密码不相等',
                showCancel: false,
            })
        } 
        else {
            // 如果注册步骤都正确，则向服务器发送请求，查找注册的账号是否存在
            wx: wx.request({
                url: 'http://127.0.0.1:7001/searchAccount',
                method: 'POST',
                data: {
                    account: account,
                },
                success: (res) => {
                    // 如果账号存在，则提示账号存在
                    if (res.data.succ == true) {
                        wx: wx.showModal({
                            title: '提示:',
                            content: '账号已存在',
                            showCancel: false,
                        })
                    }
                    else {
                        // 如果账号不存在，则向服务器发送添加账户请求
                        wx.request({
                            url: 'http://127.0.0.1:7001/add',
                            method: 'POST',
                            data: {
                                account: account,
                                password: password,
                                headimg: headimg

                            },
                            success: (res) => {
                                // 如果账号注册成功，则显示成功
                                if (res.data.succ == true) {
                                    wx: wx.showModal({
                                        title: '提示:',
                                        content: '注册成功',
                                        showCancel: false,
                                        success: (res) => {
                                            //如果注册成功点击确认则，关闭其他页面，并跳转到登录页面
                                            if (res.confirm == true) {
                                                wx.reLaunch({
                                                    url: "../index/index"
                                                })
                                            }
                                        }
                                    });

                                }
                                else {
                                    // 如果注册失败，则显示注册失败
                                    wx: wx.showModal({
                                        title: '提示:',
                                        content: '注册失败，请重新注册',
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
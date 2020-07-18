// pages/user/user.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        headimg: "",
        account: ""
    },
    // 退出登录
    exit: function () {
        wx: wx.reLaunch({
            url: '../index/index'
        })
    },
    // 跳转到修改面页面
    goto_forgetpassword: function () {
        wx.navigateTo({
            url: '../forgetpassword/forgetpassword',
        })
    },
    // 跳转到介绍页面
    goto_introduction: function () {
        wx.navigateTo({
            url: '../introduction/introduction',
        })
    },

    //客服
    people:function(){
        wx.showToast({
            title: '还没有接入客服，耐心等待哦！',
            icon: 'none',
            duration: 2000//持续的时间
       
          })
    },

    // 修改头像函数
    changeheadimg: function () {
        var account =this.data.account;
        // 选择图片
        wx.chooseImage({
            success: (res) => {
                this.setData({
                    headimg: res.tempFilePaths[0],
                })
                // 记录头像地址
                var headimg =this.data.headimg;
                console.log(headimg);
                // 向服务器发送请求，寻找该账户
                wx.request({
                    url: 'http://127.0.0.1:7001/searchAccount',
                    method: 'POST',
                    data: {
                        account: account,
                    },
                    success: (res) => {
                        var id = res.data.data[0].id;
                        // 根据id主键修改头像
                        wx.request({
                            url: 'http://127.0.0.1:7001/changeheadimg',
                            method: 'POST',
                            data: {
                                id: id,
                                headimg: headimg
                            },
                        })
                    }
                })


            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    // 初次加载，将服务器中静态图片呈现在屏幕上
    onLoad: function (options) {
        this.setData({
            account: options.account
        })
        var account = this.data.account;
        // 获取数据库图片地址
        wx.request({
            url: 'http://127.0.0.1:7001/searchAccount',
            method: 'POST',
            data: {
                account: account,
            },
            success: (res) => {
                this.setData({
                    headimg: res.data.data[0].headimg
                })
            }
        })
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
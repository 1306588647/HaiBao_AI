// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                title: "黑白炫彩",
                title1_color: "rgb(85,163,1)",
                title2: "上传黑白图片上色",
                title2_color: "rgb(127,192,31)",
                imgadd: "../../img/heibai.png",
                color1: "218,255,135",
                color2: "244,248,241",
                func: "goto_whiteblack"
            },
            {
                title: "图像去雾",
                title1_color: "rgb(244,87,0)",
                title2: "上传图片去除雾",
                title2_color: "rgb(252,139,0)",
                imgadd: "../../img/wu.png",
                color1: "255,239,42",
                color2: "255,251,176",
                func: "goto_removefog"
            },
            {
                title: "人像漫画",
                title1_color: "rgb(195,21,181)",
                title2: "上传人物照片动漫化",
                title2_color: "rgb(236,97,217)",
                imgadd: "../../img/dongman.png",
                color1: "253,182,200",
                color2: "247,228,229",
                func: "goto_Anime"
            },
            {
                title: "清晰增加",
                title1_color: "rgb(2,47,190)",
                title2: "上传图片增加清晰度",
                title2_color: "rgb(1,119,219)",
                imgadd: "../../img/secai.png",
                color1: "66,223,243",
                color2: "202,238,254",
                func: "goto_clear"
            }
        ]
    },
    //跳转到黑白炫彩页面
    goto_whiteblack: function () {
        wx.navigateTo({
            url: "../whiteblack/whiteblack"
        })
    },
    //跳转图像去雾页面
    goto_removefog: function () {
        wx.navigateTo({
            url: "../removefog/removefog"
        })
    },
    //跳转到人像漫画页面
    goto_Anime: function () {
        wx.navigateTo({
            url: "../Anime/Anime"
        })
    },
    //跳转到清晰度增加
    goto_clear: function () {
        wx.navigateTo({
            url: "../clear/clear"
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
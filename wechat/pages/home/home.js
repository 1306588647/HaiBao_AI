// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                title: "植物识别",
                title1_color: "rgb(85,163,1)",
                title2: "上传图片识别花草",
                title2_color: "rgb(127,192,31)",
                imgadd: "../../img/zhiwu.png",
                color1: "218,255,135",
                color2: "244,248,241",
                func: "goto_plant"
            },
            {
                title: "菜品识别",
                title1_color: "rgb(244,87,0)",
                title2: "上传图片识别美食",
                title2_color: "rgb(252,139,0)",
                imgadd: "../../img/caipin.png",
                color1: "255,239,42",
                color2: "255,251,176",
                func: "goto_food"
            },
            {
                title: "货币识别",
                title1_color: "rgb(195,21,181)",
                title2: "上传图片识别货币",
                title2_color: "rgb(236,97,217)",
                imgadd: "../../img/huobi.png",
                color1: "253,182,200",
                color2: "247,228,229",
                func: "goto_money"
            },
            {
                title: "动物识别",
                title1_color: "rgb(98,93,107)",
                title2: "上传图片识别动物",
                title2_color: "rgb(112,112,112)",
                imgadd: "../../img/dongwu.png",
                color1: "188,188,188",
                color2: "227,227,227",
                func: "goto_animal"
            },
            {
                title: "手势识别",
                title1_color: "rgb(2229,89,2)",
                title2: "上传图片识别手势",
                title2_color: "rgb(2229,89,2)",
                imgadd: "../../img/shoushi.png",
                color1: "255,173,47",
                color2: "254,243,225",
                func: "goto_hand"
            },
            {
                title: "Logo识别",
                title1_color: "rgb(85,183,168)",
                title2: "上传图片识别Logo",
                title2_color: "rgb(75,148,133)",
                imgadd: "../../img/logo.png",
                color1: "116,246,77",
                color2: "237,255,181",
                func: "goto_logo"
            }
        ]
    },
    //跳转到植物识别页面
    goto_plant: function () {
        wx.navigateTo({
            url: "../plant/plant"
        })
    },
    //跳转到菜品识别页面
    goto_food: function () {
        wx.navigateTo({
            url: "../food/food"
        })
    },
    //跳转到货币识别页面
    goto_money: function () {
        wx.navigateTo({
            url: "../money/money"
        })
    },
    //跳转到货币识别页面
    goto_animal: function () {
        wx.navigateTo({
            url: "../animal/animal"
        })
    },
     //跳转到手势识别页面
     goto_hand: function () {
        wx.navigateTo({
            url: "../hand/hand"
        })
    },
    //跳转到logo识别页面
    goto_logo: function () {
        wx.navigateTo({
            url: "../logo/logo"
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
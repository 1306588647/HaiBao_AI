// pages/whiteblack/whiteblack.js
Page({

    data: {
        img_add: "../../img/shangchuan.jpg",
        array: [],
        hide: true,
        res_imgadr: ""
      },
    
      plantclick: function () {
        wx.chooseImage({
          success: (res) => {
            this.setData({
              img_add: res.tempFilePaths[0],
            })
            //读取图片并且解析为base64格式
            wx.getFileSystemManager().readFile({
              filePath: res.tempFilePaths[0],
              encoding: 'base64',
              success: (res) => {
                //发起请求
                wx.request({
                  url: 'http://127.0.0.1:7001/whiteblack',
                  method: 'POST',
                  data: {
                    image: res.data
                  },
                  success: (res) => {
                    console.log(res);
                    this.setData({
                      res_imgadr: res.data.data.image,
                      hide:false
                    })
                    
                  }
                })
    
              }
            })
          }
        })
    
    
      },
      // 保存函数
      save:function(){
        var imgSrc = this.data.res_imgadr; //base64编码
        var save = wx.getFileSystemManager();
        var number = Math.random();
        save.writeFile({
          filePath: wx.env.USER_DATA_PATH + '/pic' + number + '.png',
          data: imgSrc,
          encoding: 'base64',
          success: res => {
            wx.saveImageToPhotosAlbum({
              filePath: wx.env.USER_DATA_PATH + '/pic' + number + '.png',
              success: function (res) {
                wx.showToast({
                  title: '保存成功',
                })
              },
              fail: function (err) {
                console.log(err)
              }
            })
            console.log(res)
          },
          fail: err => {
            console.log(err)
          }
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
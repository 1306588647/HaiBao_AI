// pages/food/food.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        img_add:"../../img/shangchuan.jpg",
        array:[],
        hide:true
    },
    
    plantclick:function(){
        wx.chooseImage({
            success:(res)=>{
              this.setData({
                img_add:res.tempFilePaths[0],
              })
              //读取图片并且解析为base64格式
              wx.getFileSystemManager().readFile({
                filePath:res.tempFilePaths[0],
                encoding:'base64',
                success:(res)=>{
                  //发起请求
                  wx.request({
                    url:'http://127.0.0.1:7001/food',
                    method:'POST',
                    data:{
                      image:res.data
                    },
                    success:(res)=>{
                    //   js中遍历数组的方法 数组名.forEach(el=>{})
                    //   数组取整，向下取整
                      res.data.data.result.forEach(e=>{
                        e.probability=Math.round(e.probability*100)
                      })
                      this.setData({
                        array:res.data.data.result,
                        hide:false
                      })
                    }
                  })
      
                }
              })
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
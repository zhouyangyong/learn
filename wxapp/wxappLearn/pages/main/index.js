// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: '南昌',
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    items:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca45811c4e9a575b66b62c0/example/movie',
      success: function(res) {
        // console.log(res);
        that.setData({
          items: res.data.data.movieList
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(2);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log(3);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log(4);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log(5);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // console.log(6);
    console.log(1234);
    setTimeout(() => {
      wx.stopPullDownRefresh()
    },2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log(7);
    console.log(6666);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    // console.log(8);
  }
})
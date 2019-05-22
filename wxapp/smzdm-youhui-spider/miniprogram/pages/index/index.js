// miniprogram/pages/index/index.js
const app = getApp();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    youhuiLists: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载中'
    })
    wx.cloud.callFunction({
      name: 'mzdmYouhuiSpider',
      success: (res) => {
        if (res.result.code === 200) {
          const id = res.result.id;
          db.collection('smzdmYouhuiLists').where({
            '_id': id
          })
            .get()
            .then(res => {
              this.setData({
                youhuiLists: res.data[0]['youhuiLists']
              })
              wx.hideLoading();
            })
        } else {
          wx.showToast({
            title: '网络出小差了~~'
          })
        }
        console.log('爬虫', res);
      },
      fail: (err) => {
        console.log(err);
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
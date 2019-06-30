// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotSongList: [],
    newSongList: [],
    coolDogHotSong: [
      {
        imgUrl: '../../images/dog.png',
        listName: '酷狗飙升榜',
        songs: [
          '李宇春、吴青峰 - 作为怪物',
          '李宇春、吴青峰 - 作为怪物',
          '李宇春、吴青峰 - 作为怪物'
        ]
      },
      {
        imgUrl: '../../images/dog.png',
        listName: '酷狗飙升榜',
        songs: [
          '李宇春、吴青峰 - 作为怪物',
          '李宇春、吴青峰 - 作为怪物',
          '李宇春、吴青峰 - 作为怪物'
        ]
      },
      {
        imgUrl: '../../images/dog.png',
        listName: '酷狗飙升榜',
        songs: [
          '李宇春、吴青峰 - 作为怪物',
          '李宇春、吴青峰 - 作为怪物',
          '李宇春、吴青峰 - 作为怪物'
        ]
      }
    ]
  },

  goToSearchPage() {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  goToHotPage() {
    wx.navigateTo({
      url: '../hot/hot'
    })
  },
  goToNewPage() {
    wx.navigateTo({
      url: '../new/new'
    })
  },
  goToPopPage() {
    wx.navigateTo({
      url: '../pop/pop'
    })
  },
  goToCoolPage() {
    wx.navigateTo({
      url: '../cool/cool'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    wx.request({
      url: 'https://www.gdongpay.com/API/top/list?idx=1',
      success: res => {
        const hotSongList = res.data.playlist.tracks;
        const songList = hotSongList.slice(0,6)
        this.setData({
          hotSongList: songList
        })
      }
    })
    wx.request({
      url: 'https://www.gdongpay.com/API/top/list?idx=17',
      success: res => {
        const newSongList = res.data.playlist.tracks;
        const songList = newSongList.slice(0,6)
        this.setData({
          newSongList: songList
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
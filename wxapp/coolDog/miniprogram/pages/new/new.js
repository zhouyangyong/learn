// miniprogram/pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: ['华语', '欧美', '日韩'],
    newSongLists: [],
    songList: [],
    Ch: [],
    imgs: [
      '../../images/Chinese.jpg',
      '../../images/American.jpg',
      '../../images/Japan.jpg',
    ],
    img: '../../images/Chinese.jpg',
    tabIndex: 0
  },
  toggleType(e) {
    const id = e.currentTarget.dataset.id;
    const imgs = this.data.imgs;
    const newSongLists = this.data.newSongLists;
    this.setData({
      tabIndex: id,
      img: imgs[id],
      songList: newSongLists[id]
    })
  },
  togglePlay(e) {
    const id = e.currentTarget.dataset.id;
    wx.request({
      url: 'https://www.gdongpay.com/API/song/url',
      data: {
        id: id
      },
      success: function (res) {
        if (res.data.code == 200) {
          const songInfo = res.data.data[0];
          const bgAudio = wx.getBackgroundAudioManager();
          bgAudio.title = 'title';
          bgAudio.src = songInfo.url;
        }
      }
    });
  },
  onPopup() {
    this.setData({
      show: true
    })
  },
  onClose() {
    this.setData({
      show: false
    })
  },
  onCollectSong() {
    this.setData({
      show: false
    })
  },
  onCancel() {
    this.setData({
      show: false
    })
  },
  getNewSongs(typeId) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://www.gdongpay.com/API/top/song?type=' + typeId,
        success: res => {
          resolve(res);
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const p1 = new Promise((resolve, reject) => {
      this.getNewSongs(7)
        .then(res => {
          const Chinese = res.data.data;
          resolve(Chinese);
        })
    })
    const p2 = new Promise((resolve, reject) => {
      this.getNewSongs(96)
        .then(res => {
          const American = res.data.data;
          resolve(American);
        })
    })
    const p3 = new Promise((resolve, reject) => {
      this.getNewSongs(8)
        .then(res => {
          const Japan = res.data.data;
          resolve(Japan);
        })
    })
    Promise.all([p1, p2, p3])
      .then((data) => {
        this.setData({
          newSongLists: data
        })
        const songList = this.data.newSongLists[0];
        this.setData({
          songList
        })
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
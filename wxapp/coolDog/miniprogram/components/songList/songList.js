// components/songList/songList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    songList: {
      type: Array,
      value: [],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    isPlay: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    togglePlay(e) {
      const id = e.currentTarget.dataset.id;
      wx.request({
        url: 'https://www.gdongpay.com/API/song/url',
        data: {
          id: id
        },
        success: function (res) {
          console.log(res);
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
    }
  }
})

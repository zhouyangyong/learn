// components/songList/songList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hotSongList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPopup () {
      this.setData({
        show: true
      })
    },
    onClose () {
      this.setData({
        show: false
      })
    },
    onCollectSong () {
      this.setData({
        show: false
      })
    },
    onCancel () {
      this.setData({
        show: false
      })
    }
  }
})

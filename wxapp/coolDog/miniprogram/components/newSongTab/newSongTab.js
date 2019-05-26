// components/newSongTab/newSongTab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabIndex: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toChinese() {
      this.setData({
        tabIndex: 1
      })
    },
    toWestern() {
      this.setData({
        tabIndex: 2
      })
    },
    toJapanKorea() {
      this.setData({
        tabIndex: 3
      })
    }
  }
})

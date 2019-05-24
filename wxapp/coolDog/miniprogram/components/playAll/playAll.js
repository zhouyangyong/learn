// components/playAll/playAll.js
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
    hidden: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showPlayType() {
      this.setData({
        hidden: false
      })
    },
    orderChange(e) {
      console.log(e);
    }
  }
})

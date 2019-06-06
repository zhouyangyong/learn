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
    playIconUrl: '../../images/order2.png',
    playTypeTxt: '顺序播放',
    orderIconUrl: '../../images/order1.png',
    randomIconUrl: '../../images/random2.png',
    loopIconUrl: '../../images/loop2.png',
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
    orderChange() {
      this.setData({
        playIconUrl: '../../images/order2.png',
        playTypeTxt: '顺序播放',
        orderIconUrl: '../../images/order1.png',
        randomIconUrl: '../../images/random2.png',
        loopIconUrl: '../../images/loop2.png',
        hidden: true
      })
    },
    randomChange() {
      this.setData({
        playIconUrl: '../../images/random2.png',
        playTypeTxt: '随机播放',
        orderIconUrl: '../../images/order2.png',
        randomIconUrl: '../../images/random1.png',
        loopIconUrl: '../../images/loop2.png',
        hidden: true
      })
    },
    loopChange() {
      this.setData({
        playIconUrl: '../../images/loop2.png',
        playTypeTxt: '单曲循环',
        orderIconUrl: '../../images/order2.png',
        randomIconUrl: '../../images/random2.png',
        loopIconUrl: '../../images/loop1.png',
        hidden: true
      })
    },
    onClose() {
      this.setData({
        hidden: true
      })
    }
  }
})

- start 从页面到了组件 ？
  页面是老板，组件是员工，页面是组件组成的
  start 老板也要知道状态， page data 
  <countdown start="{{start}}">

- 组件的数据 data(内部数据) + properties(外部)

- properties 里的 observer(观察者) 接收到值改变时执行

- 从内向外触发事件
  内: this.triggerEvent({
      "event_name",
      data
  })
  外: (绑定自定义事件)bind:event_name="真正执行接受消息的函数"

- 页面由组件组成，先去独立的开发组件，再拼起来

- 由外传入的properties 由内传出的事件
  pages 和 Components 就成了不可分割的有机体
喜马拉雅 掘金活动 小米商城 京东商城 马蜂窝旅游商城 58商城 口碑 猫眼电影
摩拜单车 青桔单车 微信读书 星巴克用星说 思否课堂 肯德基 小红书 58同城租房找房
二维火点餐 有赞精英 小米有品店 瓜子二手车 蘑菇街女装 拉勾网 懂球帝 滴滴出行
转转二手交易网 爱奇艺视频 快狗打车 美丽说 美团门票 拼多多 饿了吗外卖服务 珍爱网
京东秒杀 毛豆新车网 51用卡助手 丁香医生 有赞精选
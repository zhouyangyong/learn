<template>
  <div>
    <div class="goods">
      <div class="menu-wrappper" ref="menuWrapper">
        <ul>
          <li 
          v-for="(item, index) in goods" 
          :key="index" 
          class="menu-item"
          :class="{'current' : currentIndex === index}"
          @click="selectMenu(index, $event)"
          >
            <span class="text border-1px">
              <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScorll from 'better-scroll'
export default {
  name: 'Goods',
  data () {
    return {
      classMap: [],
      goods: []
    }
  },
  methods: {
    _initScroll () { // 私有方法
    this.menuScroll = new BScorll(this.$refs.menuWrapper, {
      click: true
    })
    }
  },
  created() {
     this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
     this.$http.get('https://www.easy-mock.com/mock/5ca45811c4e9a575b66b62c0/example/vue-eleme-goods')
      .then(res => {
        console.log(res);
        this.goods = res.data.data
        if (res.data.errno === 0) {
          this.$nextTick(() => { // 页面渲染完成才能执行
            this._initScroll()
          })
        }
      })
  },
}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/mixin.styl'
.goods
  display flex
  position absolute
  top 174px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrappper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      height 54px
      width 56px
      padding 0 12px
      line-height 14px
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #ffffff
        font-weight 700
      .text
        border-none()
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          margin-right 2px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease {
            bg-image('decrease_3');
          }
          &.discount {
            bg-image('discount_3');
          }
          &.guarantee {
            bg-image('guarantee_3');
          }
          &.invoice {
            bg-image('invoice_3');
          }
          &.special {
            bg-image('special_3');
          }
</style>

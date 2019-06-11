<template>
  <section class="helloWorld">
    <div class="scroll-box">
      <text-scroll :dataList="data" scrolltype="scroll-up"></text-scroll>
    </div>
    <div class="scroll-box">
      <text-scroll :dataList="data" scrolltype="scroll-left"></text-scroll>
    </div>
  </section>
</template>

<script>
import textScroll from './textscroll'
export default {
  components: {
    textScroll,
  },
  data () {
    return {
      data: [
        { text: "坚持" }, 
        { text: "不要脸" }, 
        { text: "坚持不要脸"}
      ]
    }
  }
}
</script>

<style scoped>
  .helloWorld {
    width: 300px;
    background: #f9f9f9;
    border: 1px solid #e7e8e9;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
  }

  .scroll-box {
    background-color: #f9f9f9;
    border: 1px solid #e7e7e8;
    border-radius: 5px;
  }
</style>

<template>
  <div class="mainContent">
    <Header></Header>
    <Slide></Slide>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Slide from '@/components/common/Slide'
export default {
  name: 'mainContent',
  data () {
    return {
      msg: 'helloWorld'
    }
  },
  components: {
    Header,
    Slide
  }
}
</script>

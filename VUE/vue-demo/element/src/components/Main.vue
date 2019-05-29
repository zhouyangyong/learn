<template>
    <div class="mainContent">
      <Header></Header>
      <Slide></Slide>
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

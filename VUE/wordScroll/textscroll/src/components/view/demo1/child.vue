<template>
  <div class="container">{{sendMsg.message}} {{sendDate}} {{sendAge}}</div>
</template>

<script>
export default {
  name: 'demoChild',
  data () {
    return {
      
    }
  },
  props: {
    sendMsg: {
      type: String,
      require: true
    },
    sendDate: {
      type: String,
      require: true
    },
    sendAge: {
      type: String,
      require: true
    },
  }
}
</script>

<style scoped>
  
</style>

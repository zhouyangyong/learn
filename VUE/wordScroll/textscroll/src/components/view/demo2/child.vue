<template>
  <div class="container">
    <button @click="sendMsg">ok</button>
  </div>
</template>

<script>
export default {
  name: 'demoChild2',
  data () {
    return {
      message: '我依然很帅'
    }
  },
  methods: {
    sendMsg () {
      this.$emit('zzz', this.message)
    }
  },
}
</script>

<style scoped>
  
</style>

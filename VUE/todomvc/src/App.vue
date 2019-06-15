<template>
  <div>
    <counter />
    <!-- <counter-brother :count="count" /> -->
  </div>
</template>

<script>
// 两个兄弟组件，共享count 数据
// count 不应该属于Counter组件私有 data() {}，props
import Counter from './components/Counter'
// import CounterBrother from './components/CounterBrother'
export default {
  name: 'app',
  data () {
    return {
      count: 0
    }
  },
  components: {
    'counter': Counter,
    // 'counter-brother': CounterBrother
  },
  methods: {
    
  },
}
</script>

<style>

</style>

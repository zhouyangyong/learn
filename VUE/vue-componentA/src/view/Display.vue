<template>
  <div>
    <h3>动态渲染 .vue 文件的组件--display</h3>
    <i-display :code="code">
      <!-- {{code}} -->
    </i-display>
  </div>
</template>

<script>
import iDisplay from '@/components/com/display'
import defaultCode from './default-code'
export default {
  data() {
    return {
       code: defaultCode
    }
  },
  components: {
    iDisplay
  }
}
</script>

<style>

</style>

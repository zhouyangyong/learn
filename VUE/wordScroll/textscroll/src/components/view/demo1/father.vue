<template>
  <div class="container">
    <child :send-msg="test" :send-date="date" :send-age="age"></child>
  </div>
</template>

<script>
import child from "./child";
export default {
  name: "demo1",
  data() {
    return {
      test: {
        message: "我很帅",
        date: "2019-6-11",
        age: "16"
      }
    };
  },
  components: {
    child
  }
};
</script>

<style scoped>
</style>

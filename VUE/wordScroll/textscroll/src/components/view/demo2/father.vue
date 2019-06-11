<template>
  <div class="container">
    {{msg}}
    <child @zzz='getZzz'></child>
  </div>
</template>

<script>
import child from "./child";
export default {
  name: "demo2",
  data () {
    return {
      msg: ''
    };
  },
  components: {
    child
  },
  methods: {
    getZzz (data) {
      this.msg = data;
    }
  },
};
</script>

<style scoped>
</style>

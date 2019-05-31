<template>
  <div class="look">
    {{ msg }}
    {{ $route.params.id }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Look',
  data () {
    return {
      msg: '看一看'
    }
  }  
}
</script>



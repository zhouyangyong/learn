<template>
  <div>
    <p>Hi form {{name}}</p>
    <NLink to="/">
      Home Page
    </NLink>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      name: process.static ? 'static' : (process.server?'server':'client')
    }
  },
  head: {
    title: 'About Page'
  }
}
</script>

<style>

</style>

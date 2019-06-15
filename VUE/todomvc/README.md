# todomvc

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##
- el: #root 根挂载结点
- App component + vue-router + vuex 混合而一起的应用

new Vue({
  el: '#app',
  render: h=>h(App)
})

- vue 的难点是 数据管理
  组件的状态 data() {},
  两兄弟组件共享状态，登录功能
  props 传递过去
  应用状态？ 

- 当页面上多个组件间要共享状态时，
  将共享状态，防止在这些组件的共同的父组件data来打理
  状态要唯一，放在一个地方（共同的父组件）方便管理
  如果不统一，状态有可能不同步
  父子组件通信 v-on:increment="incrementCount"
  props:  this.$emit('increment');

- 麻烦，找父节点有点麻烦，this.$emit()
  很多状态要共享的时候，很多的组件，组件的关系也错综复杂，
  App 全局数据管理 vuex 应用状态管理
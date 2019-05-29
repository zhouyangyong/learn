<template>
  <div class="Sidebar">
    <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#eeeeee"
    router
    >
      <el-menu-item index="/main">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">用户列表</el-menu-item>
          <el-menu-item index="2-2">用户信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {}
  }
}
</script>

<style scoped>
.Sidebar {
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  top: 70px;
  bottom: 0;
  background-color: #2e363f;
}
.Sidebar > ul {
  height: 100%;
}
</style>

<template>
  <div class="Header">
    <div class="logo">后台管理系统</div>
    <div class="user-info">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ userName }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      name: ''
    }
  },
  computed: {
    userName () {
      return localStorage.getItem('userName')
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'loginout') {
        localStorage.removeItem('userName')
        this.$router.push({ name: 'Login', param: { userId: 1 } })
      }
    }
  }
}
</script>

<style scoped>
  .Header {
    background-color: #4091ff;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font: 22px;
    line-height: 70px;
    color: #fff;
  }
  .Header .logo {
    float: left;
    width: 250px;
    text-align: center;
  }
  .Header .user-info {
    float: right;
    padding-right: 50px;
    font-size: 16px;
    color: #fff;
  }
  .el-dropdown-link {
    text-align: center;
    position: relative;
    display: inline-block;
    padding-left: 50px;
    color: #fff;
    cursor: pointer;
    vertical-align: middle
  }
</style>

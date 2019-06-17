<template>
  <div>
    <div class="login_page">
      <!-- 触发这个transition？ v-show v-if router切换的时候 mounted -->
      <transition name="form-fade" mode="in-out">
        <section class="form_container" v-show="showLogin">
          <div class="manage-tip">
            <span class="title">后台管理系统</span>
          </div>
          <el-form 
            :model="loginForm" 
            :roles="rules" 
            ref="loginForm" 
            class="loginForm"
          >
            <el-form-item prop="username">
              <span class="fa-tips">
                <i class="fa fa-user"></i>
              </span>
              <el-input class="area" placeholder="用户名" v-model="loginForm.username" />
            </el-form-item>
          </el-form>
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  // 表单提交后，登录状态由 vuex 管
  // 提交过程中，字段报错，v-model 自身的
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
				username: [
			    { required: true, message: '请输入用户名', trigger: 'blur' },
					{ min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
			  ],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				],
      },
      showLogin: false,
      ip: ''
    }
  },
  mounted() {
    this.showLogin = true
  },
}
</script>

<style lang="less" scoped>
  .from-fade-enter-active, .from-fade-leave-active {
    transition: all 1s;
  }
  .form-fade-enter, .from-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
</style>

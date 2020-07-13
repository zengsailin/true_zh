<template>
  <div class="login">
    <div class="content">
      <h2>短视频后台系统</h2>
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label prop="password">
          <el-input v-model="loginForm.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login(loginForm)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>
<script>

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''

      },
      info: '',
      loading: true,
      errored: false,
      timetime: '',
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {

  }
}
</script>
<style lang="less">
body{
    margin: 0;
}
#nav {
  padding: 0px;
}
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .content {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 20px 40px 15px 40px;
    margin: 300px auto;
    background: white;
    border-radius: 10px;
    .demo-ruleForm {
      .is-required {
        .el-form-item__content {
          margin-left: 0px !important;
        }
      }
      .el-form-item{
           .el-form-item__content {
          margin-left: 0px !important;
        }
      }
    }
    .demo-ruleForm{
      margin-top: 40px;
    }
  }
}
</style>

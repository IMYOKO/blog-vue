<template>
  <div class="login">
    <div class="login-wrapper">
      <h1>登录</h1>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getCookie } from '../assets/js/common'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 0, max: 30, message: '长度在 0 到 30 个字符', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 0, max: 16, message: '长度在 0 到 30 个字符', trigger: 'blur' }
          ]
      },
    }
  },
  mounted () {
    if (this.islogin) {
      this.$message({
        message: '您已登录！',
        type: 'success'
      });
      this.$router.push('/admin')
    }
  },
  computed: {
    ...mapState(['islogin'])
  },
  methods: {
    ...mapMutations(['setLogin']),
    submitForm () {
      const data = {
        username: this.ruleForm.username,
        password: this.ruleForm.password,
      }
      if (data.username == '') {
        return false
      }
      if (data.password == '') {
        return false
      }
      this.SERVER.login(data).then(res => {
        if (res.data.code === 0) {
          this.setLogin(true)
          this.$message({
            message: res.data.message,
            type: 'success'
          });
          localStorage.setItem('userId', res.data.data.id)
          this.$router.push('/admin')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: #fff;
  .login-wrapper {
    width: 320px;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
    h1 {
      text-align: center;
      margin-bottom: 40px;
    }
  }
}
</style>



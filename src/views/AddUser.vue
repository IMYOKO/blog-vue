<template>
  <div class="add-blog">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password2">
        <el-input type="password" v-model="ruleForm.password2"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名" prop="realname">
        <el-input v-model="ruleForm.realname"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '',
        password: '',
        password2: '',
        realname: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 0, max: 30, message: '长度在 0 到 30 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 0, max: 30, message: '长度在 0 到 30 个字符', trigger: 'blur' }
        ],
        password2: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { min: 0, max: 30, message: '长度在 0 到 30 个字符', trigger: 'blur' }
        ],
        realname: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' },
          { min: 0, max: 30, message: '长度在 0 到 30 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      if (this.ruleForm.username == '') {
        this.$message({
          message: '用户名不能为空',
          type: 'error'
        });
        return false
      }
      if (this.ruleForm.password == '') {
        this.$message({
          message: '密码不能为空',
          type: 'error'
        });
        return false
      }
      if (this.ruleForm.password2 == '') {
        this.$message({
          message: '确认密码不能为空',
          type: 'error'
        });
        return false
      }
      if (this.ruleForm.realname == '') {
        this.$message({
          message: '真实姓名不能为空',
          type: 'error'
        });
        return false
      }
      if (this.ruleForm.password !== this.ruleForm.password2) {
        this.$message({
          message: '两次密码不一致',
          type: 'error'
        });
        return false
      }
      this.SERVER.addUser(this.ruleForm).then(res => {
        if (res.data.code === 0) {
          this.$message({
            message: '新增用户成功',
            type: 'success'
          });
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ruleForm {
  max-width: 500px;
  padding-top: 20px;
}
</style>

<template>
  <div class="add-blog">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="ruleForm">
      <el-form-item label="博客标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="博客内容" prop="content">
        <el-input type="textarea" v-model="ruleForm.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: null,
      ruleForm: {
        title: '',
        content: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 0, max: 30, message: '长度在 0 到 30 个字符', trigger: 'blur' }
        ],
        content: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
      }
    }
  },
  mounted () {
    const id = this.$route.query.id
    if (id) {
      this.id = id
      this.getBlog(id)
    }
  },
  methods: {
    getBlog (id) {
      this.SERVER.blogDetail(id).then(res => {
        if (res.data.code === 0) {
          const { title, content } = res.data.data
          this.ruleForm.title = title
          this.ruleForm.content = content
        }
      })
    },
    submitForm () {
      this.SERVER.updateBlog(this.id, this.ruleForm).then(res => {
        if (res.data.code === 0) {
          this.$message({
            message: res.data.message,
            type: 'success'
          });
          this.$router.push('/')
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

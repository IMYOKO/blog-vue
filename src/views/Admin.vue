<template>
  <div class="admin">
    <el-button type="primary" @click="add">新增博客</el-button>
    <el-button type="primary" @click="addUser">新增用户</el-button>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        width="280">
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        width="280">
      </el-table-column>
      <el-table-column
        prop="createtime"
        label="创建时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="editor(scope.row.id)">编辑</el-button>
          <el-button type="danger" size="small" @click="deleteBlog(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.SERVER.blogList().then(res => {
        if (res.data.code === 0) {
          this.tableData = res.data.data
        }
      })
    },
    add () {
      this.$router.push('/addblog')
    },
    addUser () {
      this.$router.push('/adduser')
    },
    editor (id) {
      this.$router.push({ path: '/updateBlog', query: { id }})
    },
    deleteBlog (id) {
      console.log(id)
    }
  }
}
</script>
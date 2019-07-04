<template>
  <div class="admin">
    <div class="search-box clearfix">
      <div class="left">
        <el-button type="primary" @click="add">新增博客</el-button>
        <el-button type="primary" @click="addUser">新增用户</el-button>
      </div>
      <div class="input clearfix">
        <el-input v-model="keyword" placeholder="请输入关键字"></el-input>
        <el-button type="primary" @click="searchFn">搜索</el-button>
      </div>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        width="280">
        <template slot-scope="scope">
          <span @click="goBlogDetail(scope.row.id)">{{scope.row.title}}</span>
        </template>
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
import { timestampToTime } from '../assets/js/common'
export default {
  name: 'admin',
  data () {
    return {
      search: '',
      keyword: '',
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
          this.tableData.map(item => {
            item.createtime = timestampToTime(item.createtime)
          })
        }
      })
    },
    searchFn (keyword) {
      if (this.keyword == '') {
        return false
      }
      this.SERVER.blogList('yoko', this.keyword).then(res => {
        if (res.data.code === 0) {
          this.tableData = res.data.data
          this.tableData.map(item => {
            item.createtime = timestampToTime(item.createtime)
          })
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
    goBlogDetail (id) {
      this.$router.push({ path: '/blogdetail', query: { id }})
    },
    deleteBlog (id) {
      console.log(id)
    }
  }
}
</script>

<style lang="less" scoped>
.search-box {
  padding: 0 0 10px;
  .left {
    float: left;
  }
}
.input {
  float: right;

  .el-input {
    width: inherit;
    float: left;
    margin-right: 10px;
  }

  .el-button {
    float: left;
  }
}

.cell span {
  color: rgb(57, 57, 226);
  cursor: pointer;
  text-decoration: underline;
}
</style>

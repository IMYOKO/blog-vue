<template>
  <div class="detail">
    <h2>{{title}}</h2>
    <h5>{{createtime}}</h5>
    <div class="content">
      <p>{{content}}</p>
    </div>
  </div>
</template>

<script>
import { timestampToTime } from '../assets/js/common'
export default {
  data () {
    return {
      id: null,
      title: '',
      content: '',
      createtime: ''
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
          const { title, content, createtime } = res.data.data
          this.title = title
          this.content = content
          this.createtime = timestampToTime(createtime)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  h2 {
    font-size: 24px;
    line-height: 30px;
  }
  h5 {
    font-size: 14px;
    color: #999;
    line-height: 20px;
    font-weight: normal
  }
  .content {
    padding-top: 20px;
  }
}
</style>

<template>
  <Header class="clearfix">
    <div class="logout" v-if="islogin">
      <el-button type="danger" size="small" @click="logout()">退出登录</el-button>
    </div>
  </Header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['islogin'])
  },
  methods: {
    ...mapMutations(['setLogin']),
    logout() {
      this.SERVER.logout().then(res => {
        if (res.data.data) {
          localStorage.clear()
          this.setLogin(false)
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
Header {
  .logout {
    float: right;
    line-height: 60px;
  }
}
</style>

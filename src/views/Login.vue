<template>
  <div class="login">
    <input type="text" v-model="username" placeholder="用户名" >
    <input type="password" v-model="password" placeholder="密码" >
    <input type="button" value="登录" @click="login">
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: 'yoko',
      password: '123'
    }
  },
  methods: {
    login () {
      const data = {
        username: this.username,
        password: this.password,
      }
      this.SERVER.login(data).then(res => {
        if (res.data.code === 0) {
          this.$router.push('/admin')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  font-size: 14px;
}
</style>



<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <div class="logo"></div>
        <el-menu
          default-active="0"
          class="el-menu-vertical-demo"
          background-color="#001529"
          active-background-color="#1890ff"
          text-color="#fff"
          active-text-color="#fff">
          <el-menu-item index="0">
            <span slot="title">
              <router-link to="/">首页</router-link>
            </span>
          </el-menu-item>
          <!-- <el-menu-item index="1">
            <span slot="title">
              <router-link to="/admin">我的博客</router-link>
            </span>
          </el-menu-item> -->
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <Headers />
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link> |
      <router-link to="/admin">admin</router-link> |
      <router-link to="/addblog">addblog</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import Headers from './components/header'
export default {
  components: {
    Headers
  }
}
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.logo {
  height: 70px;
}
.el-menu-item.is-active {
  background: #1890ff !important;
  a {
    color: rgba(255, 255, 255, 1);
    display: block;
  }
}
.el-menu {
  border: none;
}
.el-aside {
  text-align: center;
  background: #001529;
  min-height: 100vh;

  a {
    color: rgba(255, 255, 255, 0.65);
    display: block;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
}
.el-header {
  background: #fff;
}
.el-container {
  background: #f0f2f5;
}
.el-main {
  margin: 10px;
  background: #fff;
}
</style>

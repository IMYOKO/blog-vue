import BasicApi from './index'

// 用户模块
class BlogApi extends BasicApi {
  // 用户登录
  login (data) {
    return this.post('/api/user/login', data)
  }
  // 用户登录
  logout () {
    return this.post('/api/user/logout', {})
  }
  // 博客列表
  blogList () {
    return this.get(`/api/blog/list?isadmin=1`)
  }
  // 博客详情
  blogDetail (id) {
    return this.get(`/api/blog/detail?id=${id}`)
  }
  // 新增博客
  addBlog (data) {
    return this.post(`/api/blog/new`, data)
  }
  // 更新博客
  updateBlog (id, data) {
    return this.post(`/api/blog/update?id=${id}`, data)
  }
  // 删除博客
  deleteBlog (id) {
    return this.post(`/api/blog/delete?id=${id}`)
  }
}

const blogApi =  new BlogApi()

blogApi.$http.interceptors.response.use(response => {
  // Do something with response data
  // console.log(response)
  if (response.data.code > 0){
    // if (response.data.code === 10111) {
    //   localStorage.removeItem('utoken')
    // }
    // Toast.error(response.data.message)
    console.log(response.data.message)
  }
  return response;
}, error => {
  // Do something with response error
  // console.log(error.response)
  if (error.response) {
    console.log(error.response.data)
  } else {
    const data = error.message
    if (data === 'Network Error') {
      // console.log('网络异常，请稍后重试');
    } else {
      console.log(error.message);
    }
  }
  return Promise.reject(error);
});

export default blogApi
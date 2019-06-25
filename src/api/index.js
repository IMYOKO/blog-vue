import axios from 'axios'

let baseURL = ''
if (process.env.NODE_ENV === 'development') {
  baseURL = ''
}
if (process.env.NODE_ENV === 'test') {
  baseURL = '//testplatforms.makeblock.com'
}
if (process.env.NODE_ENV === 'production') {
  baseURL = '//platforms.makeblock.com'
}

class BasicApi {
  constructor () {
    this.$http = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        'Cache-Control': 'no-cache'
      },
      timeout: 60 * 1000
    })
  }
  get (url, config) {
    return this.$http.get(url, config)
  }
  post (url, data, config) {
    return this.$http.post(url, data, config)
  }
  put (url, data, config) {
    return this.$http.put(url, data, config)
  }
  patch (url, data, config) {
    return this.$http.patch(url, data, config)
  }
  delete (url, config) {
    return this.$http.delete(url, config)
  }
}

export default BasicApi;
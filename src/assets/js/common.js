// 获取cookie
export const getCookie = name => {
  var arr;
  var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  // eslint-disable-next-line no-cond-assign
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}
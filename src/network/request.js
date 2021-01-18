import axios from 'axios'

export function request(config) {
  //  创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })
  //axios拦截器
  //拦截请求
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config //拦截之后还要放行
  }, err => {
    // console.log(err);
    return err
  })
  //拦截响应
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data; //拦截之后还要放行
  }, err => {
    // console.log(err);
    return err
  })

  return instance(config)
}

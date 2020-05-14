// ajax请求模块
// 返回值：promise对象
// 

import axios from 'axios'

export default function ajax (url,data={},type="GET"){
    //一下函数返回response.data
    return new Promise (function ( resolve, reject ){
        //发送异步请求
        let promise
         if (type === 'GET') {
             //准备url query参数数据
             let dataStr = '' //数据拼接字符串
             Object.keys(data).forEach( key  => {
                 dataStr += key + '=' + dataStr[key] + '&'
             })
             if (dataStr !== '') {
                //这一步有什么意义？？ 把末尾的&去掉？
                 dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                 alert(dataStr);
                 url = url + '?' + dataStr;
             }
             //发送请求
             promise = axios.get(url)
         } else {
             //发送post请求
             promise = axios.post(url, data)
             
         }
         //成功了执行resolve
         promise.then(response => {
             resolve(response.data)
         }).catch( erro =>{
          //失败执行reject
             reject(erro)
         })
    })
}



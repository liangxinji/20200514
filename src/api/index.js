//包含n个接口请求的函数模块
//接口函数返回promise

import ajax from './ajax'
//  const BASE_URL = 'http://localhost:8088'
const BASE_URL = './api'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>

//接口请求函数开头一般为req，后接实现的功能
//用箭头函数较为简单
//可传地址哈希值，也可以传经纬度（实际是一样），但是传经纬度需要进行字符串拼接，哈希值不用
//export function reqAddre(longtitude,latitude){}
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`);

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category');

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
// export const reqShops = ({longtitude,latitude}) => ajax(`/shops`,{(longtitude,latitude});
export const reqShops = (latitude,longitude) => ajax(BASE_URL+`/shops`,{latitude,longitude});

// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearchShops = (geohash,keyword) => ajax(BASE_URL+'/search_shops',{geohash,keyword});

// [5、获取一次性验证码](#5获取一次性验证码)<br/>
export const reqCaptcha = () => ajax(BASE_URL+'/captcha');
// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqPswLogin = (name,psw,captcha) => ajax(BASE_URL+'/login_pwd',{name,psw,captcha},'POST');
// [7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode',{phone});
// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqSmsLog = (phone,code) => ajax(BASE_URL+'/login_sms',{phone,code},'POST');
// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo');
// [10、用户登出](#10用户登出)<br/>
export const reqLogOut = () => ajax(BASE_URL+'/logout');
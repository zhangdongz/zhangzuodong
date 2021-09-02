import service from './service'
import request_url from './request'

// 验证码
export function smsCode(arg){
    return service({
        url:request_url.smsCode,
        data:arg,
        method:'post'
    })
}
// 登录
export function login(arg){
    return service({
        url:request_url.login,
        data:arg,
        method:'post'
    })
}
// tabbar
export function tabbar(){
    return service({
        url:request_url.tabbar,
        data:{},
        method:'get'
    })
}

// 首页数据
export function appIndex(arg){
    return service({
        url:request_url.appIndex,
        data:arg,
        method:'get'
    })
}

// 设置密码
export function password(arg){
    return service({
        url:request_url.pass,
        data:arg,
        method:'post'
    })
}

// 课程页面
export function teacher(arg){
    return service({
        url:request_url.teacher,
        data:arg,
        method:'get'
    })
}


// 咨询
export function news(arg){
    return service({
        url:request_url.news,
        data:arg,
        method:'get'
    })
}
// 咨询内容
export function index(arg){
    return service({
        url:request_url.index,
        data:arg,
        method:'post'
    })
}

// 日历
export function rili(arg){
    return service({
        url:request_url.rili,
        data:arg,
        method:'get'
    })
}

// 图书
export function book(arg){
    return service({
        url:request_url.book,
        data:arg,
        method:'get'
    })
}

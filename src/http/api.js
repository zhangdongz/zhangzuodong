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
export function tabbar(arg){
    return service({
        url:request_url.tabbar,
        data:arg,
        method:'get'
    })
}

export function appIndex(arg){
    return service({
        url:request_url.appIndex,
        data:arg,
        method:'get'
    })
}

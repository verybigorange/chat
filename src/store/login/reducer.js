import {
    LOGIN,
    LOGIN_OUT
} from './action-type'

/* 
@isLogin 是否登录
@nikename 用户昵称
@photoUrl 用户头像地址
*/

function userInfo(state={isLogin:false,nike:'',photoUrl:''},action){
    switch(action.type){
        case LOGIN:
            return {...state,isLogin:true}
        case LOGIN_OUT:
            return {...state,isLogin:false}
        default:
            return state
    }
    
}

export default {
    userInfo
}
import { LOGIN,LOGIN_OUT } from './action-type';

// 登录
export const login = ()=>{
    return  dispatch =>{
            dispatch({
                type:LOGIN
            })
    }
}

// 登出
export const loginOut = ()=>{
    return  dispatch =>{
        dispatch({
            type:LOGIN_OUT
        })
    }
}
import http from 'utils/http';

//登录
export function login(username,password){
    return http({
        method: 'post',
        url: '/login',
        data:{
            username,
            password
        }
    })
}
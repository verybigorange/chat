import { LOADING_SHOW,LOADING_HIDE } from './action-type';

// 打开loading
export const loadingShow = ()=>{
    return  {type:LOADING_SHOW}
}

// 关闭loading
export const loadingHide = ()=>{
    return  {type:LOADING_HIDE}
    
}
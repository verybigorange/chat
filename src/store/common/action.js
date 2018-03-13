import { ADD } from './action-type';

export const add_state = ()=>{
    return  dispatch =>{
        setTimeout(()=>{
            dispatch({
                type:ADD
            })
        },3000)
    }
}
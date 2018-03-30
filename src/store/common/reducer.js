import {
    LOADING_SHOW,
    LOADING_HIDE
} from './action-type'


// loading
function loading(state=false,action){
    switch(action.type){
        case LOADING_SHOW:
            return true
        case LOADING_HIDE:
            return false
        default:
            return state
    }
}

export default {
    loading
}
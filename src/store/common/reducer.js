import * as actionType from './action-type'

function test(state=3,action){
    switch(action.type){
        case actionType.ADD:
            return state + 1
        default:
            return state
    }
}

export default {
    test
}
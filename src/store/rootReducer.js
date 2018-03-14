import { combineReducers } from 'redux';

import commonReducer from './login/reducer';

const rootReducer = combineReducers(Object.assign({},
    commonReducer
));

export default rootReducer
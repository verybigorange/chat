import { combineReducers } from 'redux';

import loginReducer from './login/reducer';
import commonReducer from './common/reducer';

const rootReducer = combineReducers(Object.assign({},
    loginReducer,
    commonReducer
));

export default rootReducer
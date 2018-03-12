import { combineReducers } from 'redux';

import commonReducer from './common/reducer';

const rootReducer = combineReducers(Object.assign({},
    commonReducer
));

export default rootReducer
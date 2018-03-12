import { createStore,applyMiddleware,compose } from 'redux';
import middlewares from './middlewares';
import rootReducer from './rootReducer';

let store;

 //判断是否安装调试插件
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    );
}else{
    store = createStore(
        rootReducer,
        compose( applyMiddleware(...middlewares),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
}

export default store;
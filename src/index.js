import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/common.css';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import store from './store'
import RouterConfig from './router';

ReactDOM.render
// eslint-disable-next-line
(<Provider store={store}>
    <MuiThemeProvider>
        <RouterConfig />
    </MuiThemeProvider>
</Provider>
, document.getElementById('root'));
registerServiceWorker();

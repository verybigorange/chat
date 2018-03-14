import React,{ Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect,withRouter  } from 'react-router-dom';

import AuthRouter from './AuthRouter'
import App from '../App';
import Login from 'views/Login'

export default class RouterConfig extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>           
                    <AuthRouter />                 
                    <Switch>
                        <Route path="/" exact component={App} />
                        <Route path="/login" exact component={Login} />
                        <Redirect to="/"></Redirect>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
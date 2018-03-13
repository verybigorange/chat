import React,{ Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect,withRouter  } from 'react-router-dom';
import asyncComponent from './asyncComponent';
import AuthRouter from './AuthRouter'

import App from '../App';

const login = asyncComponent(()=>import("views/login"))

export default class RouterConfig extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>           
                    <AuthRouter />                 
                    <Switch>
                        <Route path="/" exact component={App} />
                        <Route path="/login" exact component={login} />
                        <Redirect to="/"></Redirect>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
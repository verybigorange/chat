import React,{ Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from './asyncComponent';

import App from '../App';

const login = asyncComponent(()=>import("views/login"))

export default class RouterConfig extends Component{
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/login" exact component={login} />
                    <Redirect to="/"></Redirect>
                </Switch>
            </HashRouter>
        )
    }
}
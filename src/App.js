import React, { Component } from 'react';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'
import AuthRouter from 'utils/AuthRouter';
import DashBoard from './views/DashBoard';
import Login from './views/Login';

class App extends Component {
 
  render() {
    return (
        <div className="app">
             <BrowserRouter>
                <div>           
                    <Switch>
                        <AuthRouter />
                        <Redirect to="/"></Redirect>
                    </Switch>
                </div>
             </BrowserRouter>
        </div>
    );
  }
}

export default App;

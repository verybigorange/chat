import React, { Component } from 'react';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'
import DashBoard from './views/DashBoard';
import Login from './views/Login';

class App extends Component {
 
  render() {
    return (
        <div className="app">
             <BrowserRouter>
                <div style={{height:'100%',width:'100%'}}>           
                    <Switch>
                            <Route path="/dashbord" component={DashBoard}/>
                            <Route path="/login" component={Login}></Route>
                            <Redirect to="/dashbord"></Redirect>
                    </Switch>
                </div>
             </BrowserRouter>
        </div>
    );
  }
}

export default App;

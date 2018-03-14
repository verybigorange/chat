import React, { Component } from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { withRouter,BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'
import { login,loginOut } from 'store/login/action';

import DashBoard from './views/DashBoard';
import Login from './views/Login'

@connect(
  state=>({ userInfo:state.userInfo })
,{ login,loginOut })

class App extends Component {
 
  render() {
    console.log(this.props)
    return (
        <div className="app">
             <BrowserRouter>
                <div> 
                    { this.props.userInfo.isLogin? (<DashBoard />) : (<Login />) }                  
                    <Switch>
                        <Route path="/" exact component={DashBoard} />
                        <Route path="/login"  component={Login} />
                        <Redirect to="/"></Redirect>
                    </Switch>
                </div>
             </BrowserRouter>
        </div>
    );
  }
}

export default App;

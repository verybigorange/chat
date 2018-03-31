import React, { Component } from 'react';
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'
import DashBoard from './views/DashBoard';
import Login from './views/Login';
import Register from './views/Register';
import Loading from 'components/Loading';
import { connect } from 'react-redux';

@connect(state=>({loading:state.loading}))
class App extends Component {
  render() {
    return (
        <div className="app">
             <BrowserRouter>
                <div style={{height:'100%',width:'100%'}}>           
                    <Switch>
                            <Route path="/dashbord" component={DashBoard}/>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/register" component={Register}></Route>
                            <Redirect to="/dashbord"></Redirect>
                    </Switch>
                </div>
             </BrowserRouter>
             <Loading isShow={this.props.loading}/>
        </div>
    );
  }
}

export default App;

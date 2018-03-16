import React,{ Component } from 'react';
import { Route,Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import DashBoard from 'views/DashBoard';

@connect(state=>({userInfo:state.userInfo}))
class AuthRouter extends Component{
    constructor(props){
        super(props)
    }
    render(){

        return (
            <Route path={this.props.path}
            render={props=>(
                this.props.userInfo.isLogin?
                    (<DashBoard/>):
                    (<Redirect to="/login"></Redirect>)
                
            )}  
            >
            </Route>
        )
    }
}

export default AuthRouter;
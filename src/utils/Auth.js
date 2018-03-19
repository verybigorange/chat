import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

//登录拦截
const Auth = (WrappedComponent)=>
    @connect(state=>({userInfo:state.userInfo}))
    class extends Component{
        render(){
           return this.props.userInfo.isLogin?<WrappedComponent {...this.props}/>:(<Redirect to="/login"></Redirect>)    
        }
    }
export default Auth;
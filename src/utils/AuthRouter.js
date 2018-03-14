import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import DashBoard from 'views/DashBoard';
import Login from 'views/Login';

@connect(state=>({userInfo:state.userInfo}))
@withRouter
class AuthRouter extends Component{
    componentDidMount(){
        // 未登陆，且不是登陆页面跳转到登陆页
        if(!this.props.userInfo.isLogin && this.props.match.url !=='/login'){
            this.props.history.push("/login");
        }
        //已登录，且在登陆页面，跳转到首页
        if(this.props.userInfo.isLogin && this.props.match.url ==='/login'){
            this.props.history.push("/");
        }
    }
    render(){
        return this.props.userInfo.isLogin?(<DashBoard/>):(<Login/>)
    }
}

export default AuthRouter;
import { TextField } from 'material-ui';
import React,{ Component } from 'react';
import { login } from "store/login/action";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

@connect(state=>({userInfo:state.userInfo}),{
    login
})
class Login extends Component{
    render(){
        const loginPage = ( <div style={{'textAlign':'center'}}>
            <button onClick={this.props.login}>登录</button>
            <section>
                <TextField floatingLabelText="账号:"  name='username'></TextField>
            </section>
        
            <section>
                <TextField floatingLabelText="密码:"  name='password'></TextField>
            </section>
         </div> )
        return this.props.userInfo.isLogin?(<Redirect to="/dashbord"></Redirect>):loginPage
    }
}

export default Login;
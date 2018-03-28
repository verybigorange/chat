import { TextField,RaisedButton } from 'material-ui';
import 'assets/css/login.scss';
import React,{ Component } from 'react';
import { login } from "store/login/action";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


@connect(state=>({userInfo:state.userInfo}),{
    login
})
class Login extends Component{
    render(){
        const loginPage = ( <div className="login">
           <div className="container">
                <header className="login-head">chat即时聊天</header>
                <section>
                    <TextField floatingLabelText="账号:"  name='username' style={{width:'100%'}}></TextField>
                </section>
             
                <section>
                    <TextField floatingLabelText="密码:"  name='password' style={{width:'100%'}}></TextField>
                </section>
                <section className="mt20 login-foot">
                    <RaisedButton className="fl" label="登录" primary={true}></RaisedButton>
                    <div>
                        <small className="mr10">忘记密码</small>
                        <small>注册账号</small>
                    </div> 
                   
                </section>
           </div>
         </div> )
        return this.props.userInfo.isLogin?(<Redirect to="/dashbord"></Redirect>):loginPage
    }
}

export default Login;
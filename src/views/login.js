import { TextField } from 'material-ui'
import React,{ Component } from 'react';

class Login extends Component{
    render(){
        return (
            <div style={{'textAlign':'center'}}>
                <section>
                    <TextField floatingLabelText="账号:"  name='username'></TextField>
                </section>
               
                <section>
                    <TextField floatingLabelText="密码:"  name='password'></TextField>
                </section>
            </div> 
        )
    }
}

export default Login;
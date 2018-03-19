import React,{ Component } from 'react';
import { connect } from "react-redux";
import { loginOut } from "store/login/action"
import Auth from 'utils/Auth'

@Auth
@connect(()=>({}),{
    loginOut
})
class DashBoard extends Component{
    render(){
        return (     
            <div style={{'textAlign':'center'}}>
                <button onClick={this.props.loginOut}>登出</button>
            </div> 
        )
    }
}

export default DashBoard;
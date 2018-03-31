import 'assets/css/login.scss';
import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sex: 0
        }

        this.sexSelect = this.sexSelect.bind(this);
    }
    sexSelect() {}
    render() {
        return (
            <div className="login">
                <div className="container">
                    <header className="login-head">用户注册</header>
                    <section>
                        <TextField
                            floatingLabelText="账号:"
                            name='username'
                            style={{
                            width: '100%'
                        }}></TextField>
                    </section>
                    <section>
                        <TextField
                            type="password"
                            floatingLabelText="密码:"
                            name='password'
                            style={{
                            width: '100%'
                        }}></TextField>
                    </section>
                    <section>
                        <TextField
                            type="password"
                            floatingLabelText="确认密码:"
                            name='confimPassword'
                            style={{
                            width: '100%'
                        }}></TextField>
                    </section>
                    <section>
                        <SelectField
                            style={{
                            width: '100%'
                        }}
                            floatingLabelText="性别"
                            value={this.state.sex}
                            onChange={this.sexSelect}>
                            <MenuItem value={0} primaryText="男"/>
                            <MenuItem value={1} primaryText="女"/>

                        </SelectField>
                    </section>
                    <section>
                        <TextField
                            type="textarea"
                            floatingLabelText="个性签名:"
                            name='sign'
                            style={{
                            width: '100%'
                        }}></TextField>
                    </section>
                    <section className="mt20 login-foot">
                        <RaisedButton
                            style={{
                            width: '100%'
                        }}
                            label="注册"
                            primary={true}></RaisedButton>
                    </section>
                </div>
            </div>
        )
    }
}

export default Register;

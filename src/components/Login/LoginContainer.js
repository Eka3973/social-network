import React from 'react';
import style from './Login.module.scss';
import {statuses} from "../../Redux/LoginReducer";
import {Redirect} from "react-router-dom";
import Login from "./Login";


class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rememberMe: true
        };
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.sendLogin = this.sendLogin.bind(this);
    }

    onLoginChange(e) {
        this.setState({email: e.target.value})
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value})
    }
    sendLogin = (e) => {
        e.preventDefault();
        this.props.loginUp(this.state.email, this.state.password, this.state.rememberMe);
    };

    render() {
        if (this.props.isAuth === true) {
            return <Redirect to='/profile'/>
        }
        const errorMessageBlock = this.props.status === statuses.ERROR &&
            <div className={style.errorMessage}>{this.props.message}</div>;

        return (
            <div className={style.wrapper}>
                <Login {...this.props}
                       value={this.state}
                       onLoginChange={this.onLoginChange}
                       onPasswordChange={this.onPasswordChange}
                       sendLogin={this.sendLogin}
                />
                {errorMessageBlock}
            </div>
        )
    }
}

export default LoginContainer;
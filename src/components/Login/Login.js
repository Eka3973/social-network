import React from 'react';
import style from './Login.module.scss';
import {statuses} from "../../Redux/LoginReducer";
import {Redirect} from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rememberMe: true,
        };
        this.sendLogin = this.sendLogin.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onLoginChange(e) {
        this.setState({email: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    sendLogin = (e) => {
        this.props.login(this.state.email, this.state.password, this.state.rememberMe);
        this.setState({email: ''});
        e.preventDefault();

    };


    render() {
        if (this.props.isAuth === true) {
            return <Redirect to='/profile'/>
        }
        const errorMessageBlock = this.props.status === statuses.ERROR &&
            <div>{this.props.message}</div>;
        return (
            <div className={style.wrapper}>
                <div className={style.logo}>Yo! React</div>
                <form onSubmit={this.sendLogin} className={style.form}>
                    <input type='text' onChange={this.onLoginChange} placeholder='Email' value={this.state.email}/>
                    <input type='password' onChange={this.onPasswordChange} placeholder='Password'
                           value={this.state.password}/>
                    <input className={style.checkbox} type='checkbox' value={this.state.rememberMe}/>
                    <span>Remember Me</span>
                    <button type="submit" className={style.button} disabled={this.props.status === statuses.INPROGRESS}>Sign In
                    </button>
                </form>
                {errorMessageBlock}
            </div>
        )
    }
}

export default Login;
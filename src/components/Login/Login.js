import React from 'react';
import style from './Login.module.scss';
import {statuses} from "../../Redux/LoginReducer";
import {Redirect, withRouter} from "react-router-dom";

// const Login = ({login, status, message, isAuth}) => {
//
//     if (isAuth) {
//         return <Redirect to='/profile'/>
//     }
//
//     let loginRef = React.createRef();
//     let passwordRef = React.createRef();
//     let rememberMe = React.createRef();
//
//
//     const sendLogin = () => {
//         login && login(loginRef.current.value, passwordRef.current.value, rememberMe.current.value);
//     };
//
//     const errorMessageBlock = status === statuses.ERROR &&
//         <div>{message}</div>;
//
//     return (
//         <div className={style.wrapper}>
//             <div className={style.logo}>Yo! React</div>
//             <input type='text' placeholder='Email' defaultValue='katyavova69@gmail.com' ref={loginRef}/>
//             <input type='password' placeholder='password' defaultValue='katya1' ref={passwordRef}/>
//             <input className={style.checkbox} type='checkbox' ref={rememberMe} value='true'/>
//             <button className={style.button} disabled={status === statuses.INPROGRESS} onClick={sendLogin}>Login
//             </button>
//             {errorMessageBlock}
//         </div>
//     )
// };
// export default Login;

class Login extends React.Component {
    constructor(props) {

        super(props);
        this.loginRef = React.createRef();
        this.passwordRef = React.createRef();
        this.rememberMe = React.createRef();

    }

    // sendLogin = () => {
    //     this.props.login && this.props.login(this.loginRef.current.value,
    //         this.passwordRef.current.value, this.rememberMe.current.value);
    // };

    componentDidMount() {
        this.sendLogin = () => {
            this.timer = setTimeout(()=> {
                this.props.login && this.props.login(this.loginRef.current.value,
                    this.passwordRef.current.value, this.rememberMe.current.value)
            }, 3000)
        }
    }

    componentWillMount() {
            clearTimeout(this.timer);
        }

    render() {
        if (this.props.isAuth) {
            return <Redirect to='/profile'/>
        }
        const errorMessageBlock = this.props.status === statuses.ERROR &&
            <div>{this.props.message}</div>;
        return (
            <div className={style.wrapper}>
                <div className={style.logo}>Yo! React</div>
                <input type='text' placeholder='Email' defaultValue='katyavova69@gmail.com' ref={this.loginRef}/>
                <input type='password' placeholder='password' defaultValue='katya1' ref={this.passwordRef}/>
                <input className={style.checkbox} type='checkbox' ref={this.rememberMe} value='true'/>Remember Me
                <button className={style.button} disabled={this.props.status === statuses.INPROGRESS}
                        onClick={this.sendLogin}>Login
                </button>
                {errorMessageBlock}
            </div>
        )
    }
}

export default Login;
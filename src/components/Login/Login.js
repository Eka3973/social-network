import React from 'react';
import style from './Login.module.scss';
import {statuses} from "../../Redux/LoginReducer";
import {Redirect} from "react-router-dom";

const Login = ({login, status, message, isAuth}) => {

    if (isAuth) {
        return <Redirect to='/profile'/>
    }

    let loginRef = React.createRef();
    let passwordRef = React.createRef();
    let rememberMe = React.createRef();


    const sendLogin = () => {
        login && login(loginRef.current.value, passwordRef.current.value, rememberMe.current.value);
    };

    const errorMessageBlock = status === statuses.ERROR &&
        <div>{message}</div>;

    return (
        <div className={style.wrapper}>
            <div className={style.logo}>Yo! React</div>
            <input type='text' placeholder='Email' defaultValue='katyavova69@gmail.com' ref={loginRef}/>
            <input type='password' placeholder='password' defaultValue='katya1' ref={passwordRef}/>
            <input className={style.checkbox} type='checkbox' ref={rememberMe} value='true'/>
            <button className={style.button} disabled={status === statuses.INPROGRESS} onClick={sendLogin}>Login
            </button>
            {errorMessageBlock}
        </div>
    )
};
export default Login;

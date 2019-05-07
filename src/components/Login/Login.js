import React from 'react';
import style from './Login.module.scss';
import {statuses} from "../../Redux/LoginReducer";



const Login = ({onLoginChange, onPasswordChange, sendLogin,  status,  value: {email, password, rememberMe}}) => {
    return (
        <form onSubmit={sendLogin} className={style.form}>
        <div className={style.logo}>Yo! React</div>
            <input type='text' onChange={onLoginChange} placeholder='Email' value={email}/>
            <input type='password'  onChange={onPasswordChange} placeholder="password" value={password}/>
            <label className={style.checkboxWrapper}>
                <input className={style.checkbox} type="checkbox" value={rememberMe}/>
                <div>Remember Me</div>
            </label>
            <button type="submit" className={style.button} disabled={status === statuses.INPROGRESS}>Sign In</button>
        </form>
    )
};

export default Login;
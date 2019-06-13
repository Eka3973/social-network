import React from 'react';
import style from './Login.module.scss';
import {statuses} from "../../Redux/LoginReducer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Login = ({loginUp, status, isAuth, message}) => {

    const sendLogin = values => {
        loginUp(
            values.login,
            values.password,
            values.remember
        )
    };

    if (isAuth === true) {
        return <Redirect to='/profile'/>
    }
    const errorMessageBlock = status === statuses.ERROR &&
        <div className={style.errorMessage}>{message}</div>;

    return (
        <div className={style.appWrapperLoginPage}>
            <div className={style.logo}>Yo! React</div>
            <LoginFormConnect onSubmit={sendLogin} status={status}/>
            {errorMessageBlock}
        </div>


    )
};

export default Login;

const LoginForm = ({handleSubmit, submitting}) => {
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <Field component={LoginInput}
                   type='text' name='login'
                   placeholder='Email'
                   validate={emailValidation}
            />
            <Field component={LoginInput}
                   type='Password'
                   name='password'
                   placeholder="Password"
                   warn={[passwordSymbolValidation, passwordMinLengthValidation]}
            /> <label className={style.checkboxWrapper}>
            <Field component={LoginInput}
                   type="checkbox"
                   name='remember'
                   className={style.checkbox}
            />
            <div>Remember Me</div>
        </label>
            <button type="submit" disabled={submitting} className={style.button}>Sign In
            </button>
        </form>
    )
};


const LoginFormConnect = reduxForm({form: 'login-form'})(LoginForm);

const LoginInput = ({input, meta: {touched, error, warning}, ...props}) => {
    return (
        <div className={style.wrapperInput}>
            <input {...input} {...props} />
            {touched &&
            ((error && <span className={style.inputError}>{error}</span>) ||
                (warning && <span className={style.inputError}>{warning}</span>))}
        </div>
    )
};

const emailValidation = value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        return 'Invalid email address';
    return undefined;
};

const passwordSymbolValidation = value => {
    if (value && /[^a-zA-Z0-9 ]/i.test(value))
        return 'Only alphanumeric characters';
    return undefined;
};

const minLength = min => value => {
    if (value && value.length < min)
        return `Must be ${min} characters or more`;
    return undefined;
};
const passwordMinLengthValidation = minLength(6);



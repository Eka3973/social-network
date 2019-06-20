import React from 'react';
import style from './HeaderProfile.module.scss';
import {NavLink, Redirect} from "react-router-dom";

interface IHeaderProfile {
    logOut: Function;
    photo: string;
    isAuth: string;
    userInfo: any;
}

const HeaderProfile = ({logOut, photo, isAuth, userInfo: {userName}}: IHeaderProfile) => {

    const onLogOutClick = () => {
        logOut();

    };

    // if (typeof isAuth === typeof false) {
    //     return <Redirect to='/login'/>
    // }

    return (
        <div className={style.wrapper}>
            <span className={style.userName}>{userName}</span>
            <img className={style.userPhoto} src={photo} alt=''/>
            <div className={style.userHiddenMenu}>
                <span className={style.hiddenMenuItem}>My page</span>
                <NavLink className={style.hiddenMenuItem} to='/changePhoto'>Update photo</NavLink>
                <NavLink to='/login'><button className={style.button} onClick={onLogOutClick}>Log Out</button></NavLink>
            </div>

        </div>)

};
export default HeaderProfile;


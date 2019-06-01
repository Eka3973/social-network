import React from 'react';
import style from './HeaderProfile.module.scss';
import Redirect from "react-router-dom/es/Redirect";
import {NavLink} from "react-router-dom";

const HeaderProfile=({logOut, photo, isAuth,  userInfo: {userName}})=> {

    const onLogOutClick = () => {
        logOut();

    };

        if (isAuth === false) {
            return <Redirect to='/login'/>
        }

        return (
            <div className={style.wrapper}>
                <span className={style.userName}>{userName}</span>
                <img className={style.userPhoto} src={photo} alt=''/>
                <div className={style.userHiddenMenu}>
                    <span className={style.hiddenMenuItem}>My page</span>
                    <NavLink className={style.hiddenMenuItem} to='/changePhoto' >Update photo</NavLink>
                    <button className={style.button} onClick={onLogOutClick}>Log Out</button>
                </div>

            </div>)

};
export default HeaderProfile;


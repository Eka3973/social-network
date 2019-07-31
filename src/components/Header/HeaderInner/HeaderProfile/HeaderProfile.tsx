import React from 'react';
import style from './HeaderProfile.module.scss';
import {NavLink, Redirect} from "react-router-dom";

interface IProps {
    logOut: Function;
    photo: string;
    isAuth: boolean;
    fullName: string;
}

const HeaderProfile = ({logOut, photo, isAuth, fullName}: IProps) => {

    const onLogOutClick = () => {
        logOut();

    };

     if (!isAuth) {
         return <Redirect to='/login'/>
     }

    return (
        <div className={style.wrapper}>
            <span className={style.userName}>{fullName}</span>
            <img className={style.userPhoto} src={photo} alt=''/>
            <div className={style.userHiddenMenu}>
                <NavLink to='/editProfile' className={style.hiddenMenuItem}>Edit profile</NavLink>
                <NavLink to='/changePhoto' className={style.hiddenMenuItem} >Update photo</NavLink>
                <button className={style.button} onClick={onLogOutClick}>Log Out</button>
            </div>
        </div>)

};
export default HeaderProfile;


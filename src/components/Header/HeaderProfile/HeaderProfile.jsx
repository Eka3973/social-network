import React from 'react';
import style from './HeaderProfile.module.scss';
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";



const HeaderProfile = ({isAuth, userInfo, logOut}) => {
    if (isAuth === false) {
        return <Redirect to='/login'/>
    }
    const onLogOutClick = () => {
        logOut();
    };

    return (
        <div className={style.headerProfile}>
            <div>
                <span>{userInfo.userName}</span>
                <button onClick={onLogOutClick}>Log Out</button>
            </div>

        </div>
    )
};

export default HeaderProfile;


HeaderProfile.propTypes = {
    isAuth: PropTypes.bool,
    userInfo: PropTypes.object,
    logOut: PropTypes.func


};


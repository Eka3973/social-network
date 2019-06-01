import React from 'react';
import PropTypes from "prop-types";
import style from './HorizontalMenu.module.scss';
import {NavLink} from "react-router-dom";


const HorizontalMenu = ({path}) => {

    return (
        <div className={style.wrapper}>
            <div className={style.innerWrapper}>
                <NavLink to={path}  className={style.item}>
                    Members</NavLink>
                <div className={style.item}>Croups</div>
                <div className={style.item}>More</div>
            </div>
        </div>


    )
};

export default HorizontalMenu;


HorizontalMenu.propTypes = {
    isAuth: PropTypes.bool,
    userInfo: PropTypes.object,
    logOut: PropTypes.func


};


import React from 'react';
import style from './HorizontalMenu.module.scss';
import {NavLink} from "react-router-dom";

const HorizontalMenu = () => {
    return (
        <div className={style.innerWrapper}>
            <NavLink to='/users' className={style.item}>Members</NavLink>
            <NavLink to='/profile' className={style.item}>Croups</NavLink>
            <div className={style.item}>More</div>
        </div>
    )
};

export default HorizontalMenu;





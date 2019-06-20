import React from 'react';
import style from './HorizontalMenu.module.scss';
import {NavLink} from "react-router-dom";

interface IHorizontalMenu{
    path: any;

}


const HorizontalMenu = ({path}:IHorizontalMenu) => {

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





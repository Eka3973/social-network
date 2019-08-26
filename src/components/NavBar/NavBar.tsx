import React from 'react';
import style from './NavBar.module.scss';
import {NavLink} from "react-router-dom";
import {InavBar} from "../../Types/TypesNavBar";

interface IProps {
    navBarPage: InavBar[];
}


const NavBar = ({navBarPage}:IProps) => {
    const menuItem = navBarPage.map((elem) =>
        <NavLink key={elem.id} to={elem.path} className={style.navLink}>
            <div className={style.navItem}>
                <div className={style.item}>
                    <img src={elem.iconSrc} className={style.navImg} alt={elem.iconAlt}/>
                    {elem.pageName}
                </div>
                {/*<div className={style.count}>1</div>*/}
            </div>
        </NavLink>
    );

    return (
        <div className='appWrapperNavbar'>
            <nav className={style.nav}>
                {menuItem}
            </nav>
        </div>
    )
};
export default NavBar;


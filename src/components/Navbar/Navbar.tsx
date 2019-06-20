import React from 'react';
import style from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

interface IProps {
    navBarPage: any;
}


const Navbar = ({navBarPage}:IProps) => {
    const menuItem = navBarPage.map((elem:any) =>
        <NavLink key={elem.id} to={elem.path} className={style.navLink}>
            <div className={style.navItem}>
                <div className={style.item}>
                    <img src={elem.iconSrc} className={style.navImg} alt={elem.iconAlt}/>
                    {elem.pageName}
                </div>
                <div className={style.count}>1</div>
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
export default Navbar;


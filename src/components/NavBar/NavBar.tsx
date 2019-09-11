import React from 'react';
import style from './NavBar.module.scss';
import {NavLink} from "react-router-dom";
import {INavBar} from "../../Types/TypesNavBar";

interface IProps {
    navBarPage: INavBar[];
}


const NavBar = ({navBarPage}:IProps) => {

    return (
        <div className='appWrapperNavbar'>
            <nav className={style.nav}>
                {navBarPage.map((elem) =>
                    <NavLink key={elem.id} to={elem.path} className={style.navLink}>
                        <div className={style.navItem}>
                            <div className={style.item}>
                                <img src={elem.iconSrc} className={style.navImg} alt={elem.iconAlt}/>
                                {elem.pageName}
                            </div>
                        </div>
                    </NavLink>
                )}
            </nav>
        </div>
    )
};
export default NavBar;


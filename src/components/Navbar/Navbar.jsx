import React from 'react';
import style from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";


const Navbar = ({navBarPage}) => {
    const menuItem = navBarPage.map((elem) =>
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
        <nav className={style.nav}>
            {menuItem}
        </nav>
    )
};
export default Navbar;

Navbar.propTypes = {
    navBarPage: PropTypes.array.isRequired,
};
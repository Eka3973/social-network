import React from 'react';
import style from './Header.module.scss';
import Logo from "./Logo/Logo";
import ConnectedHeaderProfile from "./HeaderProfile/HeaderProfileConnect";



const Header = () => {
    return (
        <header className={style.headerWrapper}>
            <Logo />
            <ConnectedHeaderProfile/>
        </header>
    )

};
export default Header;




import React from 'react';
import style from './Header.module.scss';
import Logo from "./Logo/Logo";
import HeaderInner from "./HeaderInner/HeaderInner";
import ConnectedHeaderProfile from "./HeaderInner/HeaderProfileContainer/HeaderProfileConnect";


const Header = () => {
    return (

            <header className={style.headerWrapper}>
                <Logo/>
                <HeaderInner/>
                <ConnectedHeaderProfile/>
            </header>

    )

};
export default Header;




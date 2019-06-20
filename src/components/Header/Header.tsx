import React from 'react';
import style from './Header.module.scss';
import Logo from "./Logo/Logo";
import HeaderInner from "./HeaderInner/HeaderInner";


const Header = () => {
    return (
        <div className='appWrapperHeader'>
            <header className={style.headerWrapper}>
                <Logo/>
                <HeaderInner/>
            </header>
        </div>
    )

};
export default Header;




import React from 'react';
import style from './Header.module.scss';

const Header = () => {

    return (
        <header className={style.headerWrapper}>
            <div className={style.logo}>
                Yo! React
            </div>
            <div className={style.header}> </div>
        </header>)
};
export default Header;




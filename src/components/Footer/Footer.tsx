import React from 'react';
import style from './Footer.module.scss';


const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.footerBuffer}>
                <span>© 2019</span>
                <a href='https://it-incubator.by' target='_blank'>IT-incubator</a>
            </div>
        </div>
    )

};
export default Footer;
import React from "react";
import style from './HeaderInner.module.scss';
import ConnectedProfileContacts from "../../Profile/ProfileContacts/ProfileContactsConnect";
import HorizontalMenu from "./HorizontalMenu/HorizontalMenu";


const HeaderInner = () => {
    return (
        <div className={style.headerInnerWrapper}>
            <div className={style.headerInner}>
                <HorizontalMenu/>
                <ConnectedProfileContacts/>
            </div>
        </div>
    )

};
export default HeaderInner;
import React from "react";
import style from './HeaderInner.module.scss';
import ConnectedHorizontalMenu from "./HorizontalMenu/HorizontalMenuConnect";
import ConnectedProfileContacts from "../../Profile/ProfileContacts/ProfileContactsConnect";


const HeaderInner = () => {
    return (
        <div className={style.headerInnerWrapper}>
            <div className={style.headerInner}>
                <ConnectedHorizontalMenu/>
                <ConnectedProfileContacts/>
            </div>
        </div>
    )

};
export default HeaderInner;
import React from "react";
import style from './HeaderInner.module.scss';
import ConnectedHeaderProfile from "./HeaderProfile/HeaderProfileConnect";
import ConnectedHorizontalMenu from "./HorizontalMenu/HorizontalMenuConnect";
import ConnectedProfileContacts from "../../Profile/ProfileContacts/ProfileContactsConnect";


const HeaderInner = () => {
    return (
        <div className={style.headerWrapper}>
            <div className={style.headerInner}>
                <ConnectedHorizontalMenu/>
                <ConnectedProfileContacts/>
            </div>
            <ConnectedHeaderProfile/>
        </div>
    )

};
export default HeaderInner;
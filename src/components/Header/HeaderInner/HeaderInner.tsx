import React from "react";
import style from './HeaderInner.module.scss';
import ConnectedHeaderProfile from "./HeaderProfile/HeaderProfileConnect";
import ConnectedHorizontalMenu from "./HorizontalMenu/HorizontalMenuConnect";
import ConnectedHeaderSearchForm from "./HeaderSearchForm/HeaderSearchFormConnect";


const HeaderInner = () => {
    return (
        <div className={style.headerInner}>
            <ConnectedHeaderSearchForm/>
            <ConnectedHorizontalMenu/>
            <ConnectedHeaderProfile/>
        </div>
    )

};
export default HeaderInner;
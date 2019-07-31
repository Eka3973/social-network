import React from 'react';
import style from "./HeaderSearchForm.module.scss";
import {IHeaderState} from "../../../../Types/TypesHeader";


const HeaderSearchForm = ({iconSrc, iconAlt}: IHeaderState) => {
    return <div className={style.wrapper}>
        <input className={style.input} type="text"/>
        <button className={style.button}>
            <img src={iconSrc} alt={iconAlt} className={style.searchImg}/>
        </button>
    </div>
};
export default HeaderSearchForm;
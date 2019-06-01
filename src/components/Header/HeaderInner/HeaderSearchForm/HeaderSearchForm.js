import React from 'react';
import style from "./HeaderSearchForm.module.scss";


const HeaderSearchForm = ({iconSrc, iconAlt}) => {
    return <div className={style.wrapper}>
        <input className={style.input} type="text"/>
        <button className={style.button}>
            <img src={iconSrc} alt={iconAlt} className={style.searchImg}/>
        </button>
    </div>
};
export default HeaderSearchForm;
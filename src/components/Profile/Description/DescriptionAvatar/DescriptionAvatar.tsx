import React from 'react';
import style from "./DescriptionAvatar.module.scss";

interface IProps {
    photo: any,

}


const DescriptionAvatar = ({photo}: IProps) => {

    return (
            <div className={style.descriptionImg}>
                <img src={photo} alt='User avatar'/>
            </div>
           )

};
export default DescriptionAvatar;

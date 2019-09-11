import React from 'react';
import style from "./DescriptionAvatar.module.scss";


interface IProps {
    fullProfile: {
        photo: string
    }

}

const DescriptionAvatar = ({fullProfile}: IProps) => {

    return (
        <div className={style.descriptionImg}>
            <img src={fullProfile.photo} alt='User avatar'/>
        </div>
    )

};
export default DescriptionAvatar;

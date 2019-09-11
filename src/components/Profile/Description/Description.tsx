import React from 'react';
import style from "./Description.module.scss";
import UserDescription from "./UserDescription/UserDescription";
import DescriptionAvatar from "./DescriptionAvatar/DescriptionAvatar";


interface IProps {
    fullProfile: {
        aboutMe: string,
        photo: string,
        fullName: string,
        lookingForAJob: boolean,
        lookingForAJobDescription: string
    }
    github: string
}

const Description = ({fullProfile, github}: IProps) => {

    return (
        <div className={style.descriptionWrapper}>
            <DescriptionAvatar fullProfile={fullProfile}/>
            <UserDescription fullProfile={fullProfile} github={github}/>

        </div>
    )

};
export default Description;

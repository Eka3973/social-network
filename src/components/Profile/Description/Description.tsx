import React from 'react';
import style from "./Description.module.scss";
import UserDescription from "./UserDescription/UserDescription";
import DescriptionAvatar from "./DescriptionAvatar/DescriptionAvatar";


interface IProps {
    fullProfile: any,
    github: string
}


const Description = ({fullProfile: {aboutMe, photo, fullName, lookingForAJob, lookingForAJobDescription}, github}: IProps) => {

    return (
        <div className={style.descriptionWrapper}>
                <DescriptionAvatar photo={photo}/>
                    <UserDescription aboutMe={aboutMe}
                                     fullName={fullName}
                                     lookingForAJob={lookingForAJob}
                                     lookingForAJobDescription={lookingForAJobDescription}
                                     github={github}
                    />

        </div>
)

};
export default Description;

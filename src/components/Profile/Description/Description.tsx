import React from 'react';
import style from "./Description.module.scss";

interface IProps {
    aboutMe: string
    photo: string;
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
}



const Description = ({aboutMe, photo, fullName, lookingForAJob, lookingForAJobDescription}:IProps) => {

    return (
        <div className={style.descriptionWrapper}>
            <div className={style.descriptionImg}>
                <img
                    src={photo}
                    alt='User avatar'/>
            </div>
            <div className={style.descriptionUser}>
                <div>
                    <h1 className={style.fullName}>{fullName}</h1>
                </div>
                <div>
                    <div className={style.descriptionUserBiography}>
                        <span>About Me:</span>
                        <span>{aboutMe}</span>
                    </div>
                    <div className={style.descriptionUserBiography}>
                        <span>Looking for a job:</span>
                        {lookingForAJob === true? <span>Yes</span>: <span>No</span>}
                    </div>
                    <div className={style.descriptionUserBiography}>
                        <span>Job description:</span>
                        <span>{lookingForAJobDescription}</span>
                    </div>
                    </div>
                </div>
            </div>
    )

};
export default Description;

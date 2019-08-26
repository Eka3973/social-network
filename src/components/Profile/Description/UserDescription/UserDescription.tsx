import React from 'react';
import style from "./UserDescription.module.scss";


interface IProps {
    aboutMe: string,
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    github: string,
}


const UserDescription = ({aboutMe, fullName, lookingForAJob, lookingForAJobDescription, github}: IProps) => {

    return (
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
                        {lookingForAJob === true ? <span>Yes</span> : <span>No</span>}
                    </div>
                    <div className={style.descriptionUserBiography}>
                        <span>Job description:</span>
                        <span>{lookingForAJobDescription}</span>
                    </div>
                    <div className={style.descriptionUserBiography}>
                        <span>Git Repository:</span>
                        <a className={style.githubAddress} href={github} target='_blank'>{github}</a>
                    </div>
                </div>
            </div>

    )

};
export default UserDescription;

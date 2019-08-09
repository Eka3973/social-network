import React from 'react';
import style from "./Description.module.scss";

interface IProps {
    fullProfile: any,
    github: string
}


const Description = ({fullProfile: {aboutMe, photo, fullName, lookingForAJob, lookingForAJobDescription}, github}: IProps) => {

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
        </div>
    )

};
export default Description;

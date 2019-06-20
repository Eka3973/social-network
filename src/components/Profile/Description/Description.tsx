import React from 'react';
import style from "./Description.module.scss";

interface IProps {
    photo: any;
    fullName: any;
    descriptionAlt: string;
    description: any;
    niceName: string;
    dateOfBirth: string;
    city: string;
    education: string;
    Twitter: string;
}



const Description = ({photo, fullName, description: {descriptionAlt,
    niceName, dateOfBirth, city, education, Twitter}}:IProps) => {

    return (
        <div className={style.descriptionWrapper}>
            <div className={style.descriptionImg}>
                <img
                    src={photo}
                    alt={descriptionAlt}/>
            </div>
            <div className={style.descriptionUser}>
                <div>
                    <h1>{fullName}<span>{niceName}</span></h1>
                </div>
                <div>
                    <div className={style.descriptionUserBiography}>
                        <span>About Me:</span>
                        <span>{dateOfBirth}</span>
                    </div>
                    <div className={style.descriptionUserBiography}>
                        <span>Looking for a job:</span>
                        <span>{city}</span>
                    </div>
                    <div className={style.descriptionUserBiography}>
                        <span>Facebook:</span>
                        <span>{education}</span>
                    </div>
                    <div className={style.descriptionUserBiography}>
                        <span>Twitter:</span>
                        <span>{Twitter}</span>

                    </div>
                </div>
            </div>
        </div>
    )

};
export default Description;

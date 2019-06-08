import React from 'react';
import style from "./ProfileImg.module.scss";
import ConnectedProfileStatus from "./ProfileStatus/ProfileStatusConnect";



const ProfileImg = ({profileHeader: {profileImg, profileAlt}}) => {

    return (
        <div className={style.ProfileHeader}>
            <div className={style.ProfileHeaderImg}>
                <img src={profileImg}
                     alt={profileAlt}/>
            </div>
            <ConnectedProfileStatus/>
        </div>

    )

};
export default ProfileImg;

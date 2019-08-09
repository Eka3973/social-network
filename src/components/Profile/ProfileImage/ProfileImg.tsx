import React from 'react';
import style from "./ProfileImg.module.scss";
import ConnectedProfileStatus from "../../../Forms/ProfileStatus/ProfileStatusConnect";




interface IProfileImg {
    profileHeader: any;
}

const ProfileImg = ({profileHeader: {profileImg, profileAlt}}: IProfileImg) => {

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

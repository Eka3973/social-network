import React from 'react';
import style from "./ProfileImg.module.scss";
import ConnectedProfileStatus from "../../../Forms/ProfileStatus/ProfileStatusConnect";
import ProfileContacts from "../ProfileContacts/ProfileContacts";

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
            <ProfileContacts/>
        </div>

    )

};
export default ProfileImg;

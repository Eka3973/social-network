import React from 'react';
import style from "./ProfileImage.module.scss";
import PropTypes from "prop-types";


const ProfileImage = ({profileHeader: {profileImg, profileAlt}}) => {
    return (
        <div className={style.ProfileHeader}>
            <div className={style.ProfileHeaderImg}>
                <img src={profileImg}
                     alt={profileAlt}/>
            </div>
        </div>
    )

};
export default ProfileImage;

ProfileImage.propTypes = {
    profileHeader: PropTypes.object.isRequired,


};
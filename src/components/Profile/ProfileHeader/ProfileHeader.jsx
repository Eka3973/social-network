import React from 'react';
import style from "./ProfileHeader.module.scss";
import PropTypes from "prop-types";


const ProfileHeader = ({profileHeader: {profileImg, profileAlt}}) => {
    return (
        <div className={style.ProfileHeader}>
            <div className={style.ProfileHeaderImg}>
                <img src={profileImg}
                     alt={profileAlt}/>
            </div>
        </div>
    )

};
export default ProfileHeader;

ProfileHeader.propTypes = {
    profileHeader: PropTypes.object.isRequired,


};
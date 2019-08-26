import React from 'react';
import style from "./Profile.module.scss";
import ConnectedMyPostsPage from "../../Forms/MyPost/MyPostConnect";
import ConnectedPost from "./Posts/PostsConnect";
import ConnectedDescription from "./Description/DescriptionConnect";
import ConnectedProfileImg from "./ProfileImage/ProfileImgConnect";

const Profile = () => {
    return (
        <div className={style.ProfileWrapper}>
            <ConnectedProfileImg/>
            <ConnectedDescription/>
            <ConnectedMyPostsPage/>
            <ConnectedPost/>
        </div>
    )
};
export default Profile;


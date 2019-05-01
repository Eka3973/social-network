import React from 'react';
import style from "./Profile.module.scss";
import ConnectedMyPostsPage from "./MyPost/MyPostConnect";
import ConnectedPost from "./Posts/PostsConnect";
import ConnectedProfileHeader from "./ProfileHeader/ProfileHeaderConnect";
import ConnectedDescription from "./Description/DescriptionConnect";


const Profile = () => {
    return (
        <div className={style.ProfileWrapper}>
            <ConnectedProfileHeader />
            <ConnectedDescription />
            <ConnectedMyPostsPage />
            <ConnectedPost />
        </div>
    )
};
export default Profile;


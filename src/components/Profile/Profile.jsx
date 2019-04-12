import React from 'react';
import style from "./Profile.module.scss";
import ConnectedMyPostsPage from "./MyPost/MyPostContainer";
import ConnectedPost from "./Posts/PostsContainer";
import ConnectedProfileHeader from "./ProfileHeader/ProfileHeaderContainer";
import ConnectedDescription from "./Description/DescriptionContainer";


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


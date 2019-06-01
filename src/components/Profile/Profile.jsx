import React from 'react';
import style from "./Profile.module.scss";
import ConnectedMyPostsPage from "./MyPost/MyPostConnect";
import ConnectedPost from "./Posts/PostsConnect";
import ConnectedProfileHeader from "./ProfileImage/ProfileImageConnect";
import ConnectedDescription from "./Description/DescriptionConnect";

class Profile extends React.Component {

   render() {
        return (
            <div className={style.ProfileWrapper}>
                <ConnectedProfileHeader/>
                <ConnectedDescription/>
                <ConnectedMyPostsPage/>
                <ConnectedPost/>
            </div>
        )
    }
}
export default Profile;


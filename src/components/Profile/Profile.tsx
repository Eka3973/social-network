import React from 'react';
import style from "./Profile.module.scss";
import ConnectedMyPostsPage from "../../Forms/MyPost/MyPostConnect";
import ConnectedPost from "./Posts/PostsConnect";
import ConnectedDescription from "./Description/DescriptionConnect";
import ConnectedProfileImg from "./ProfileImage/ProfileImgConnect";


interface IProps {
    match: any
}


class Profile extends React.Component<IProps>{

    componentDidMount(): void {
        let setUserId = this.props.match.params.userId;
        console.log(setUserId);
        // api.setFullUserProfile(setUserId)
        //     .then((data: any) => {
        //
        //         console.log(data)
        //     })


    }

    render(): React.ReactNode {
        return (
            <div className={style.ProfileWrapper}>
                <ConnectedProfileImg/>
                <ConnectedDescription/>
                <ConnectedMyPostsPage/>
                <ConnectedPost/>
            </div>
        )
    }
}
export default Profile;


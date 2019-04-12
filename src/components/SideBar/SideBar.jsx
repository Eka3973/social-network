import React from 'react';
import style from './SideBar.module.scss';
import ConnectedSideBarFriends from "./SiteBarFriend/SiteBarFriendContainer";
import ConnectedSideBarTitle from "./FriendsTitle/FriensTitleContainer";


const SideBar = () => {
    return (
        <div className={style.sideBarWrapper}>
            <ConnectedSideBarTitle />
            <ConnectedSideBarFriends />
        </div>
    )
};
export default SideBar;


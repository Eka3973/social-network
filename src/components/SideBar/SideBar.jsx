import React from 'react';
import style from './SideBar.module.scss';
import ConnectedSideBarFriends from "./SiteBarFriend/SiteBarFriendConnect";
import ConnectedSideBarTitle from "./FriendsTitle/FriensTitleConnect";


const SideBar = () => {
    return (
        <div className={style.sideBarWrapper}>
            <ConnectedSideBarTitle />
            <ConnectedSideBarFriends />
        </div>
    )
};
export default SideBar;


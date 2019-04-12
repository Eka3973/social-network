import React from 'react';
import style from './SideBarFriend.module.scss';
import PropTypes from "prop-types";

const SideBarFriend = ({users, altImg, iconUserSrc}) => {


    const friendItem = users.filter((elem) => elem.followed === true).map((elem) =>
        <div key={elem.id} className={style.friendItem}>
            <div className={style.friendImage}>
                {elem.photos.small ? <img src={elem.photos.small} alt={altImg}/> :
                    <img src={iconUserSrc} alt={altImg}/>}
            </div>
            <div className={style.friendName}>
                <span>{elem.name}</span>
            </div>
        </div>);

    return (
        <div className={style.friendWrapper}>
            {friendItem}
        </div>
    )
};
export default SideBarFriend;

SideBarFriend.propTypes = {
    sideBarFriend: PropTypes.array.isRequired,
};





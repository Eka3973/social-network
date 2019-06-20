import React from "react";
import style from './Friends.module.scss';

interface IProps {
    users: any[];
    altImg: string;
    iconUserSrc: string;
}



const Friends = ({users, altImg, iconUserSrc}: IProps) => {

    const UserItem = users.filter((elem) => elem.friend === true).map((elem) =>
        <div key={elem.id} className={style.userItem}>
            <div className={style.userImg}>
                {elem.photos.small ? <img src={elem.photos.small} alt={altImg}/> : <img src={iconUserSrc} alt={altImg}/>}
            </div>
            <div className={style.userData}>
                <span className={style.userName}>{elem.name}</span>
                <span className={style.userMeta}>active 3 years, 2 month ago</span>
                <div className={style.countFollower}>
                    <span>4</span>
                    <span>followers</span>
                </div>
            </div>
            <div className={style.buttons}>
                <button className={style.buttonCancel} >Add friend</button>
                    <button className={style.buttonFollower} data-user-id={elem.id} >Unsubscribe</button>
            </div>
        </div>);
    return(
        <div className={style.usersWrapper}>
            {UserItem}
        </div>
    )

};
export default Friends;
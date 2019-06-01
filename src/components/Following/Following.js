import React from "react";
import style from './Following.module.scss';



const Followers = ({users, altImg, iconUserSrc, unsubscribe, subscribe}) => {
    const Subscribe = (e) => {
        const clickedSubscribe = e.target;
        subscribe(+clickedSubscribe.dataset.userId);
    };

    const unSubscribe = (e) => {
        const clickedUnsubscribe = e.target;
        unsubscribe(+clickedUnsubscribe.dataset.userId);
    };


    const UserItem = users.filter((elem) => elem.followed === true).map((elem) =>
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
                <button className={style.buttonCancel} data-user-id={elem.id} onClick={Subscribe}>Add friend</button>
                    <button className={style.buttonFollower} data-user-id={elem.id} onClick={unSubscribe}>Unsubscribe</button>
            </div>
        </div>);
    return(
        <div className={style.usersWrapper}>
            {UserItem}
        </div>
    )

};
export default Followers;
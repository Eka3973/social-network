import React from 'react';
import style from './FriendsList.module.scss';


const FriendsList = ({users, iconUserSrc, unsubscribe, subscribe, altImg}) => {

    const Subscribe = (e) => {
        const clickedSubscribe = e.target;
        subscribe(+clickedSubscribe.dataset.userId);

    };
    const unSubscribe = (e) => {
        const clickedUnsubscribe = e.target;
        unsubscribe(+clickedUnsubscribe.dataset.userId);
    };


    const userItem = users.map(elem =>
        <div key={elem.id} className={style.friendItem}>
            <div className={style.friendImg}>
                {elem.photos.small ? <img src={elem.photos.small} alt={altImg}/> : <img src={iconUserSrc} alt={altImg}/>}
            </div>
            <div className={style.friendData}>
                <span className={style.friendName}>{elem.name}</span>
                <span className={style.friendMeta}>active 3 years, 2 month ago</span>
                <div className={style.countFollower}>
                    <span>4</span>
                    <span>followers</span>
                </div>
            </div>
            <div className={style.buttons}>
                <button className={style.buttonCancel}>Cancel Friendship</button>
                {elem.followed ?
                    <button className={style.buttonFollower} data-user-id={elem.id} onClick={unSubscribe}>Unsubscribe</button> :
                    <button className={style.buttonFollower} data-user-id={elem.id} onClick={Subscribe}>subscribe</button>}
            </div>
        </div>);
    return (
        <div className={style.friendsWrapper}>
            {userItem}
        </div>

    )
};
export default FriendsList;
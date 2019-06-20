import React from 'react';
import style from './Members.module.scss';
interface IProps {
    users: any[],
    iconUserSrc: any,
    unsubscribe: Function,
    subscribe: Function,
    altImg: string
}

const Members = ({users, iconUserSrc, unsubscribe, subscribe, altImg}: IProps) => {

    const Subscribe = (e:any) => {
        const clickedSubscribe = e.target;
        subscribe(+clickedSubscribe.dataset.userId);

    };
    const unSubscribe = (e:any) => {
        const clickedUnsubscribe = e.target;
        unsubscribe(+clickedUnsubscribe.dataset.userId);
    };


    const userItem = users.map(elem =>
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
                <button className={style.buttonCancel}>Add friend</button>
                {elem.followed ?
                    <button className={style.buttonFollower} data-user-id={elem.id} onClick={unSubscribe}>Unsubscribe</button> :
                    <button className={style.buttonFollower} data-user-id={elem.id} onClick={Subscribe}>subscribe</button>}
            </div>
        </div>);
    return (
        <div className={style.usersWrapper}>
            {userItem}
        </div>

    )
};
export default Members;


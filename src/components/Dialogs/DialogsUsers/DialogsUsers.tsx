import React from 'react';
import style from './DialogsUsers.module.scss';

interface DialogsUsers {
    users: any[],
    iconUserSrc: string,
    altImg: string
}

const DialogsUsers = ({users, iconUserSrc, altImg} : DialogsUsers) => {

    const dialogItem = users.map((elem) =>
        <div key={elem.id} className={style.userItem}>
            <div className={style.userAvatar}>
                {/*<img src={elem.userImg} alt={elem.userAlt}/>*/}
                {elem.photos.small ? <img src={elem.photos.small} alt={altImg}/> : <img src={iconUserSrc} alt={altImg}/>}
            </div>
            <div>
                <span className={style.userFrom}>from:</span>
                {elem.name}</div>
        </div>);

    return (
        <div>
            {dialogItem}
        </div>
    )
};

export default DialogsUsers;

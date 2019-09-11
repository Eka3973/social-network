import React from 'react';
import style from './DialogsUsers.module.scss';

interface DialogsUsers {
    users: any[],
    iconUserSrc: string,
    altImg: string
}

const DialogsUsers = ({users, iconUserSrc, altImg} : DialogsUsers) => {
    return (
        <div>
            {users.map((elem) =>
                <div key={elem.id} className={style.userItem}>
                    <div className={style.userAvatar}>
                        {elem.photos.small ? <img src={elem.photos.small} alt={altImg}/> : <img src={iconUserSrc} alt={altImg}/>}
                    </div>
                    <div>
                        <span className={style.userFrom}>from:</span>
                        {elem.name}</div>
                </div>)}
        </div>
    )
};

export default DialogsUsers;

import React from 'react';
import style from './DialogsUsers.module.scss';
import PropTypes from "prop-types";


const DialogsUsers = ({users, iconUserSrc, altImg}) => {

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

DialogsUsers.propTypes = {
    dialogsUsers: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            userImg: PropTypes.string.isRequired,
            userAlt: PropTypes.string.isRequired,
            userName: PropTypes.string.isRequired
        })
    )
};
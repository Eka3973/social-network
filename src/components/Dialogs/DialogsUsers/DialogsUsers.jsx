import React from 'react';
import style from './DialogsUsers.module.scss';
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";


const DialogsUsers = ({dialogsUsers}) => {
    const dialogItem = dialogsUsers.map((elem) =>
        <div key={elem.id} className={style.userItem}>
            <div className={style.userAvatar}>
                <img src={elem.userImg} alt={elem.userAlt}/>
            </div>
            <NavLink to={elem.path} activeClassName={style.active}>
                <span className={style.userFrom}>from:</span>
                {elem.userName}</NavLink>
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
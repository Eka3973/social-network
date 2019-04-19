import React from 'react';
import style from './FriendsTitle.module.scss';
import {NavLink} from "react-router-dom";



const FriendsTitle = ({path, setUsers}) => {

const loadUsers =(e) => {
    const clicked = e.target;
    setUsers(clicked);
};

    return (
        <NavLink to={path}  className={style.title}>
            <div onClick={loadUsers}>Friends</div></NavLink>

    )
};
export default FriendsTitle;



// commit

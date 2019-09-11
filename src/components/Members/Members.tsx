import React from 'react';
import style from './Members.module.scss';
import {IUsers} from "../../Types/TypesUsers";
import {NavLink} from "react-router-dom";
import ConnectedPagination from "./Pagination/PaginationConnect";


interface IProps {
    users: IUsers[],
    iconUserSrc: any,
    unsubscribe: Function,
    subscribe: Function,
    altImg: string,
    buttonDisabled: boolean
}

const Members = ({users, iconUserSrc, unsubscribe, subscribe, altImg, buttonDisabled}: IProps) => {


    const Subscribe = (e: React.MouseEvent) => {
        e.preventDefault();
        const clickedSubscribe = e.currentTarget.id;
        subscribe(+clickedSubscribe);

    };
    const unSubscribe = (e: React.MouseEvent) => {
        const clickedUnsubscribe = e.currentTarget.id;
        unsubscribe(+clickedUnsubscribe);
    };

    return (
        <div className={style.usersWrapper}>
            {users.map((elem: any) =>
                <div key={elem.id} className={style.userItem}>
                    <NavLink to={'/profile/' + elem.id} className={style.userImg}>
                        {elem.photos.small ? <img src={elem.photos.small} alt={altImg}/> :
                            <img src={iconUserSrc} alt={altImg}/>}
                    </NavLink>
                    <div className={style.userData}>
                        <span className={style.userName}>{elem.name}</span>
                        <span className={style.userMeta}>active 3 years, 2 month ago</span>
                        <div className={style.countFollower}>
                            <span>4</span>
                            <span>followers</span>
                        </div>
                    </div>
                    <div className={style.buttons}>
                        {elem.followed ?
                            <button className={style.buttonFollower} id={elem.id} onClick={unSubscribe}
                                    disabled={buttonDisabled}>
                                Unsubscribe
                            </button> :
                            <button className={style.buttonFollower} id={elem.id} onClick={Subscribe}
                                    disabled={buttonDisabled}>subscribe</button>}
                    </div>
                </div>)}
            <ConnectedPagination/>
        </div>
    )
};
export default Members;


import React from 'react';
import style from './HeaderProfile.module.scss';
import {NavLink, Redirect} from "react-router-dom";


const HeaderProfile = ({isAuth, userInfo, logOut}) => {
    if (isAuth === false) {
        return <Redirect to='/login'/>
    }
    const onLogOutClick = () => {
        logOut();
    };

    return (
        <div className={style.headerProfile}>
            {
                isAuth &&
            <div className={style.login}>
                <span>{userInfo.userName}</span>
                <button onClick={onLogOutClick}>Log Out</button>
            </div>
            }
            {
                !isAuth &&
            <NavLink to='/login'>
                <button>Sign In</button>
            </NavLink>

            }
        </div>
    )
};


class HeaderProfileContainer extends React.Component {
    componentWillMount() {
        this.props.me();
    }

    render() {
        return <HeaderProfile {...this.props}/>
    }
}

export default HeaderProfileContainer;






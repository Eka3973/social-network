import React from 'react';
import style from './HeaderProfileContainer.module.scss';
import {NavLink, Redirect} from "react-router-dom";

interface IProps {
    logOut: Function;
    photo: string;
    isAuth: boolean;
    fullName: string;
    onLogOutClick: any,
    showDropdownMenu: any

}

interface IState {
    displayMenu: boolean;

}


class HeaderProfileContainer extends React.Component<IProps, IState> {
    private container: React.RefObject<HTMLDivElement>;

    constructor(props: IProps) {
        super(props);
        this.container = React.createRef();
        this.state = {
            displayMenu: false,
        };

        this.onLogOutClick = this.onLogOutClick.bind(this);
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.clickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.clickOutside);
    }

    clickOutside = (event: any) => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                displayMenu: false,
            })
        }
    };

    onLogOutClick() {
        this.props.logOut();
    };

    showDropdownMenu = () => {

        this.setState(state => {
            return {
                displayMenu: !state.displayMenu,
            }
        });

    };

    render() {

        if (!this.props.isAuth) {
            return <Redirect to='/login'/>
        }
        return (
            <div className={style.wrapper} ref={this.container}>
                <div className={style.userProfile}>
                    <span className={style.userName} onClick={this.showDropdownMenu}>{this.props.fullName}</span>
                    <img className={style.userPhoto} src={this.props.photo} alt='User Avatar'/>
                </div>
               {this.state.displayMenu &&
                <div className={style.userHiddenMenu}>
                    <NavLink to='/editProfile' className={style.hiddenMenuItem}>Edit profile</NavLink>
                    <NavLink to='/changePhoto' className={style.hiddenMenuItem}>Update photo</NavLink>
                    <button className={style.button} onClick={this.onLogOutClick}>Log Out</button>
                </div>}
            </div>)
    }

}

export default HeaderProfileContainer;


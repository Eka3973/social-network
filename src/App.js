import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import ConnectedNavbarPage from "./components/Navbar/NavbarConnect";
import ConnectedLogin from "./components/Login/LoginConnect";
import ConnectedMembers from "./components/Members/MembersConnect";
import ConnectedFollowers from "./components/Following/FollowersConnect";
import ConnectedFriends from "./components/Friends/FriendsConnect";
import ConnectedProfile from "./components/Profile/ProfileConnect";
import News from "./components/News/News";
import ConnectedMyPostsPage from "./components/Header/HeaderInner/HeaderProfile/PageChangePhoto/PageChangePhotoConnect";



const App = () => {
    return (
        <div className='appWrapper'>
            <Header/>
            <ConnectedNavbarPage/>
            <Route exact path='/profile' component={ConnectedProfile}/>
            <Route exact path='/dialogs' component={Dialogs}/>
            <Route exact path='/friends' component={ConnectedFriends}/>
            <Route exact path='/following' component={ConnectedFollowers}/>
            <Route exact path='/news' component={News}/>
            <Route exact path='/music' component={Music}/>
            <Route exact path='/settings' component={Settings}/>
            <Route exact path='/users' component={ConnectedMembers}/>
            <Route exact path='/changePhoto' component={ConnectedMyPostsPage}/>
            <Route exact path='/login' component={ConnectedLogin}/>
        </div>
    )

};
export default App;




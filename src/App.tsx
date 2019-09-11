import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import {Route} from "react-router-dom";
import ConnectedNavBarPage from "./components/NavBar/NavBarConnect";
import ConnectedLogin from "./Forms/Login/LoginConnect";
import ConnectedMembers from "./components/Members/MembersConnect";
import ConnectedFollowers from "./components/Following/FollowersConnect";
import ConnectedProfile from "./components/Profile/ProfileConnect";
import News from "./components/News/News";
import ConnectedSetting from "./components/Settings/SettingsConnect";
import ConnectedChangePhotoProfile from "./Forms/UpdatePhoto/UpdatePhotoConnect";
import ConnectedEditProfile from './Forms/EditProfile/EditProfileConnect';
import Footer from "./components/Footer/Footer";



const App = () => {
    return (
        <div className='appWrapper'>
            <Header/>
            <ConnectedNavBarPage/>
                <Route  path='/profile/:userId?' render={()=><ConnectedProfile/>}/>
                <Route exact path='/dialogs' render={()=><Dialogs/>}/>
                <Route exact path='/following' render={()=><ConnectedFollowers/>}/>
                <Route exact path='/news' render={()=><News/>}/>
                <Route exact path='/music' render={()=><Music/>}/>
                <Route exact path='/settings' render={()=><ConnectedSetting/>}/>
                <Route exact path='/users' render={()=><ConnectedMembers/>}/>
                <Route exact path='/changePhoto' render={()=><ConnectedChangePhotoProfile/>}/>
                <Route exact path='/editProfile' render={()=><ConnectedEditProfile/>}/>
                <Route exact path='/login' render= {()=><ConnectedLogin/>}/>
                <Footer/>
        </div>
    )

};
export default App;




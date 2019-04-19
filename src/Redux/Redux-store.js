import {applyMiddleware, combineReducers, createStore} from "redux";
import navbarReducer from "./NavbarReducer";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import sideBarReducer from "./SideBarReducer";
import friendListReducer from "./FriendListReducer";
import loginReducer from "./LoginReducer";
import thunk from "redux-thunk";
import authReducer from "./AuthReducer";


const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navBarPage: navbarReducer,
    sideBarPage: sideBarReducer,
    friendListPage: friendListReducer,
    loginPage: loginReducer,
    authPage: authReducer

});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
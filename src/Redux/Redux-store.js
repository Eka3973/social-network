import {applyMiddleware, combineReducers, createStore} from "redux";
import navbarReducer from "./NavbarReducer";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";
import loginReducer from "./LoginReducer";
import thunk from "redux-thunk";
import authReducer from "./AuthReducer";
import headerReducer from "./HeaderReducer";
import PageChangePhotoReducer from "./PageChangePhotoReducer";



const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navBarPage: navbarReducer,
    usersPage: usersReducer,
    loginPage: loginReducer,
    auth: authReducer,
    headerPage: headerReducer,
    PageChangePhotoPage: PageChangePhotoReducer


});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
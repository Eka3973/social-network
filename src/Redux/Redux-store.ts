import {applyMiddleware, combineReducers, createStore} from "redux";
import navbarReducer from "./NavbarReducer";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";
import loginReducer from "./LoginReducer";
import thunk from "redux-thunk";
import authReducer from "./AuthReducer";
import headerReducer from "./HeaderReducer";
import statusReducer from "./StatusReducer";
import {reducer as formReducer } from 'redux-form';
import {composeWithDevTools} from "redux-devtools-extension";


const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navBarPage: navbarReducer,
    usersPage: usersReducer,
    loginPage: loginReducer,
    auth: authReducer,
    headerPage: headerReducer,
    statusPage: statusReducer,
    form: formReducer

});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;

 export type  AppState = ReturnType<typeof reducers>
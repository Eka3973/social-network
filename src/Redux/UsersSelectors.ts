import {AppState} from "./Redux-store";

export const getMembers = (state: AppState) => {

    return state.usersPage.users
};

export const getIconUser = (state: AppState) => {
    return state.usersPage.iconUserSrc
};

export const getUsersAlt = (state: AppState) => {
    return state.usersPage.altImg
};

export const getButtonDisabled = (state: AppState) => {
    return state.usersPage.buttonDisabled
};

// export const getPreloader=(state: AppState) =>{
//   return state.preloaderPage.isPreloader
// };
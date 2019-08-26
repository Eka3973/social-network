export const PRELOADER = 'SW/PROFILE/PRELOADER';

export interface IPreloader {
    isPreloader: boolean;
}

export interface IPreloaderAction {
    type: typeof PRELOADER,
    isPreloader: boolean;
}







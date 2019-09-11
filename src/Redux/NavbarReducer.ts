import homeImg from "../images/home.svg";
import envelopeImg from "../images/envelope.svg";
import newsImg from "../images/news.svg";
import musicImg from "../images/music.svg";
import settingsImg from "../images/settings.svg";
import followersImg from "../images/followers.svg";
import {INavBar} from "../Types/TypesNavBar";

let initialState: INavBar[] =
    [
        {
            id: 1,
            path: "/profile",
            pageName: 'Profile',
            iconSrc: homeImg,
            iconAlt: 'Icon home'
        },
        {
            id: 2,
            path: "/dialogs",
            pageName: 'Messages',
            iconSrc: envelopeImg,
            iconAlt: 'Icon envelope'
        },
        {
            id: 4,
            path: "/following",
            pageName: 'Following',
            iconSrc: followersImg,
            iconAlt: 'Icon followers'

        },
        {
            id: 5,
            path: "/news",
            pageName: 'News',
            iconSrc: newsImg,
            iconAlt: 'Icon new'
        },
        {
            id: 6,
            path: "/music",
            pageName: 'Music',
            iconSrc: musicImg,
            iconAlt: 'Icon music'
        },
        {
            id: 7,
            path: "/settings",
            pageName: 'Settings',
            iconSrc: settingsImg,
            iconAlt: 'Icon  settings'

        }

    ]
;
const navBarReducer = (state = initialState, action: any) => {

    switch (action.type) {
        default:
            return state;
    }
};
export default navBarReducer;
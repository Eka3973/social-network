import homeImg from "../images/home.svg";
import envelopeImg from "../images/envelope.svg";
import newsImg from "../images/news.svg";
import musicImg from "../images/music.svg";
import settingsImg from "../images/settings.svg";

let initialState =
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
            id: 3,
            path: "/news",
            pageName: 'News',
            iconSrc: newsImg,
            iconAlt: 'Icon new'
        },
        {
            id: 4,
            path: "/music",
            pageName: 'FriendsList',
            iconSrc: musicImg,
            iconAlt: 'Icon music'
        },
        {
            id: 5,
            path: "/settings",
            pageName: 'Settings',
            iconSrc: settingsImg,
            iconAlt: 'Icon  settings'

        }

    ]
;
const navbarReducer = (state = initialState, action) => {
    // debugger;
    switch (action.type) {
        default:
            return state;
    }
};
export default navbarReducer;
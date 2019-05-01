import profileHeaderImg from "../images/profileHeaderImg.jpg";

export const ADD_MY_POST = 'SN/MY_POSTS/ADD_MY_POST';

const initialState = {
    profileHeader: {
        profileImg: profileHeaderImg,
        profileAlt: 'programmer'
    },

    description: {
        descriptionImg: 'https://avatarko.ru/img/avatar/4/devushka_brunetka_3755.jpg',
        descriptionAlt:
            'Profile picture of Jill Smith',
        userName:
            'Jill Smith ',
        niceName:
            '@jillsmith',
        dateOfBirth:
            '15 July',
        city:
            'New York',
        education:
            'New York University',
        Twitter:
            'https://twitter.com/BuddyBossWP'
    }
    ,
    myPosts: {
        titlePost: 'My posts',
        placeholderPost:
            'Your news...'
    }
    ,
    posts: [
        {
            id: 1,
            postImg: 'https://avatarko.ru/img/avatar/18/muzhchina_muzyka_gitara_17753.jpg',
            postAlt: 'Profile picture of Jon Greene',
            name: 'Curtis Lynch',
            itemPost: 'How do you plan to integrate this in your upcoming strategy?',
            like: 'like',
            counter: 23
        },
        {
            id: 2,
            postImg: 'https://avatarko.ru/img/avatar/13/serial_12297.jpg',
            postAlt: 'Profile picture of Curtis Lynch',
            name: 'Jon Greene',
            itemPost: 'You can perform an A/B test for your own analysis?',
            like: 'like',
            counter: 16
        },
        {
            id: 3,
            postImg: 'https://avatarko.ru/img/avatar/18/devushka_platya_ulybka_17959.jpg',
            postAlt: 'Profile picture of Jessica Sanders',
            name: 'Jessica',
            itemPost: 'Incidunt sequi dolorem ea sint!Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            like: 'like',
            counter: 38
        }],

};


const profileReducer = (state = initialState, action) => {
    let copyState;
    switch (action.type) {
        case ADD_MY_POST:
            if (!!action.post.trim()) {
                let addPost = {
                    id: 4,
                    postImg: state.description.descriptionImg,
                    postAlt: state.description.descriptionAlt,
                    name: state.description.userName,
                    itemPost: action.post,
                    like: 'like',
                    counter: 0,
                };
                copyState = {
                    ...state,
                    posts: [addPost, ...state.posts]
                };
                return copyState;
            }
            return state;

        default:
            return state;
    }
};


export const addPostActionCreator = (addedPost) =>
    ({type: ADD_MY_POST, post: addedPost});


export default profileReducer;
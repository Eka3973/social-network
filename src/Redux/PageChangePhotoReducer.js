import {getChangePhoto} from "../DAL/samuraiAPI";
import {setProfileId} from "./ProfileReducer";

const CHANGE_PHOTO = 'SW/PAGE_CHANGE_PHOTO/CHANGE_PHOTO';



let initialState = {
    previewImage: null,
    file: null,



};
const PageChangePhotoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PHOTO:
            return {...state, previewImage: action.previewImage, file: action.file};


        default:
            return state;
    }
};


export const setImageChange = file => {
    return dispatch => {
        let reader = new FileReader();
        reader.onloadend = () => {
            dispatch(imageChange(reader.result, file));
        };
        reader.readAsDataURL(file);

    };
};


export const setUrlPhotoToProfile = (file) => {
    return dispatch => {
        getChangePhoto(file)
            .then(res => {
                dispatch(setProfileId());

            });
    }
};

export default PageChangePhotoReducer;

const imageChange = (previewImage, file) => ({type: CHANGE_PHOTO, previewImage, file});



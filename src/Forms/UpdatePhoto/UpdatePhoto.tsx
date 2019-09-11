import React from 'react';
import style from './UpdatePhoto.module.scss';

interface IUpdatePhoto {
    setImageChange: Function,
    previewImage: string,
    file: string,
    getUserProfile: Function,
    getUrlPhotoToProfile: Function,

}


const UpdatePhoto = ({setImageChange, previewImage, file, getUserProfile, getUrlPhotoToProfile}: IUpdatePhoto) => {

    const handleImageChange = (e: any) => {
        e.preventDefault();
        setImageChange(e.target.files[0]);
    };


    const handleSubmit = (e: any) => {
        e.preventDefault();
        getUrlPhotoToProfile(file);
    };

    return (
        <div className={style.wrapper}>
            <h3>Change Profile Photo</h3>
            <div className={style.textNote}>
                <span>Your profile photo will be used on your profile and throughout the site.</span>
                <span>If there is a Avatar associated with your account email we will use that, </span>
                <span>or you can upload an image from your computer.</span>
            </div>

            <form className={style.form} onSubmit={handleSubmit}>
                <img className={style.previewImage} src={previewImage} alt=''/>
                <input className={style.input}
                       type='file'
                       onChange={handleImageChange}
                       id='file-input'/>
                <label className={style.optionButton} htmlFor="file-input">Chose your file</label>
                <button type='submit' className={style.uploadButton}>Upload Image</button>
            </form>

        </div>
    )

};


export default UpdatePhoto;
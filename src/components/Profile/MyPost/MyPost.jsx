import React from 'react';
import style from "./MyPost.module.scss";
import PropTypes from "prop-types";


const MyPost = ({addPost, updatePost, myPosts: {titlePost, placeholderPost, buttonPost}, newPostText}) => {
    const newPost = React.createRef();

    const addText = () => {
        let addedPost = newPost.current.value;
        addPost(addedPost);
    };
    const onPostChange = () => {
        let enteredTextPost = newPost.current.value;
        updatePost (enteredTextPost);
    };
    return (
        <div className={style.myPostWrapper}>
            <div className={style.myPost}>
                <h2>{titlePost}</h2>
                <textarea onChange={onPostChange} ref={newPost} placeholder={placeholderPost} value={newPostText} />
                <button type='button' onClick={addText}>{buttonPost}</button>
            </div>
        </div>
    )
};
export default MyPost;

MyPost.propTypes = {
    addPost: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
    myPosts: PropTypes.object.isRequired,
    newPostText: PropTypes.string.isRequired

};
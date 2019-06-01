import React, {useState} from "react";
import PropTypes from "prop-types";
import style from "./MyPost.module.scss";

const MyPost = ({addPost, myPosts: {titlePost, placeholderPost}}) => {
    const [postText, setPost] = useState('');


    const onPostChange = (e) => {
        e.preventDefault();
        setPost(e.currentTarget.value);
    };

    const addText = (e) => {
        e.preventDefault();
        addPost(postText);
        setPost("");
    };

    return (
        <div className={style.myPostWrapper}>
            <div className={style.myPost}>
                <h2>{titlePost}</h2>
                <textarea onChange={onPostChange}
                          placeholder={placeholderPost}
                          value={postText}/>
                <button type='button' onClick={addText}>Add post</button>
            </div>
        </div>)
};
export default MyPost;

MyPost.propTypes = {
    addPost: PropTypes.func.isRequired,
    myPosts: PropTypes.shape({
        titlePost: PropTypes.string.isRequired,
        placeholderPost: PropTypes.string.isRequired
    })
};

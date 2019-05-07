import React from "react";
import PropTypes from "prop-types";


const MyPost = ({value, onPostChange, addText, myPosts: {titlePost, placeholderPost}}) => {
    return (
        <div>
            <h2>{titlePost}</h2>
            <textarea onChange={onPostChange}
                      placeholder={placeholderPost} value={value}/>
            <button type='button' onClick={addText}>Add post</button>
        </div>)
};
export default MyPost;

MyPost.propTypes = {
    onPostChange: PropTypes.func.isRequired,
    addText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    myPosts: PropTypes.shape({
        titlePost: PropTypes.string.isRequired,
        placeholderPost: PropTypes.string.isRequired
    })
};

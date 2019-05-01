import React from "react";
import PropTypes from "prop-types";


const MyPostTextArea = ({value, onPostChange, myPosts: {titlePost, placeholderPost}}) => {
    return (
        <div>
            <label>
            <h2>{titlePost}</h2>
            <textarea onChange={onPostChange}
                      placeholder={placeholderPost} value={value}/>
            </label>
        </div>)
};
export default MyPostTextArea;

MyPostTextArea.propTypes = {
    onPostChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    myPosts: PropTypes.shape({
        titlePost: PropTypes.string.isRequired,
        placeholderPost: PropTypes.string.isRequired
    })
};

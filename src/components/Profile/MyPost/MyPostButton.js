import React from "react";
import PropTypes from "prop-types";

const MyPostButton = ({addText}) =>{
  return(
      <div>
          <button type='button' onClick={addText}>Add post</button>
      </div>
  )
};
export default MyPostButton;

MyPostButton.propTypes = {
    addText: PropTypes.func.isRequired,

};

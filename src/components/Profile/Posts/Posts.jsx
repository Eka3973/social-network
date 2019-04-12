import React from 'react';
import style from "./Posts.module.scss";
import PropTypes from "prop-types";

const Posts = ({posts}) => {

    const postItem = posts.map((elem) =>
        <div key={elem.id} className={style.PostItem}>
            <div className={style.PostItemImg}>
                <img
                    src={elem.postImg}
                    alt={elem.postAlt}/>
            </div>
            <div className={style.PostItemMessage}>
                <span>{elem.name}</span>
                {elem.itemPost}
            </div>
            <div className={style.PostItemLike}>
                <div>{elem.counter}</div>
                <span>{elem.like}</span>
            </div>
        </div>);

    return (
        <div className={style.postWrapper}>
            {postItem}
        </div>
    )

};
export default Posts;

Posts.propTypes = {
    posts: PropTypes.array.isRequired
};
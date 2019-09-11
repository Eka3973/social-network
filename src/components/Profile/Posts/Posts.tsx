import React from 'react';
import style from "./Posts.module.scss";


interface IPosts {
    posts: object[],
}

const Posts = ({posts}: IPosts) => {

    return (
        <div className={style.postWrapper}>
            {posts.map((elem: any) =>
                <div key={elem.id} className={style.PostItem}>
                    <div className={style.PostItemImg}>
                        <img
                            src={elem.postImg}
                            alt='Avatar picture of profile'/>
                    </div>
                    <div className={style.PostItemMessage}>
                        <span>{elem.name}</span>
                        {elem.itemPost}
                    </div>
                    <div className={style.PostItemLike}>
                        <div>{elem.counter}</div>
                        <span>{elem.like}</span>
                    </div>
                </div>)}
        </div>
    )

};
export default Posts;


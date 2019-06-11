import React from "react";
import style from "./MyPost.module.scss";
import {Field, reduxForm} from "redux-form";

const MyPost = ({addPost}) => {

    const addText = values => {
        addPost(values.post);

    };
    return (
        <div className={style.myPostWrapper}>
            <h2>My posts</h2>
            <MyPostReduxForm onSubmit={addText} placeholder='Your news...'/>
        </div>)
};

export default MyPost;


const MyPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <Field component={TextArea} type='text' name='post' placeholder={props.placeholder}/>
            <button type="submit" className={style.button}>Add post</button>
        </form>
    )
};

const MyPostReduxForm = reduxForm({form: 'my-post-form'})(MyPostForm);


const TextArea = ({input, ...props}) => {
    return (
        <div>
            <textarea  {...input} {...props}  className={style.textArea}/>
        </div>
    )
};





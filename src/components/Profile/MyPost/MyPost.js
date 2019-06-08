import React from "react";
import style from "./MyPost.module.scss";
import {Field, reduxForm} from "redux-form";

const MyPost = ({addPost}) => {

    const addText = values => {

        addPost(values.post);
        // setPost("");
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
            <Field component={Textarea} name='post' placeholder={props.placeholder}/>
            <button type="submit" className={style.button}>Add post</button>
        </form>
    )
};

const MyPostReduxForm = reduxForm({form: 'my-post-form'})(MyPostForm);


const Textarea = (input, meta, ...props) => {
    return (
        <div>
            <textarea  {...props} {...input} className={style.textArea}/>
        </div>
    )
};



import React from "react";
import style from "./MyPost.module.scss";
import {Field, reduxForm} from "redux-form";

const MyPost = ({addPost, clearForm}) => {

    const addText = values => {
        addPost(values.post);
        clearForm();
    };
    return (
        <div className={style.myPostWrapper}>
            <h2>My posts</h2>
            <MyPostReduxForm onSubmit={addText} placeholder='Your news...'/>
        </div>
    )
};

export default MyPost;


const MyPostForm = ({handleSubmit, pristine, submitting, placeholder}) => {


    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <Field component={TextArea}
                   type='text' name='post'
                   placeholder={placeholder}

            />
            <button type="submit" disabled={pristine || submitting} className={style.button}>Add post</button>
        </form>
    )
};

const MyPostReduxForm = reduxForm({form: 'my-post-form'})(MyPostForm);


const TextArea = ({input, ...props}) => {
    return (
        <div>
            <textarea  {...input} {...props} className={style.textArea}/>
        </div>
    )
};




import React, {FormEvent} from "react";
import style from "./MyPost.module.scss";
import {Field, reduxForm} from "redux-form";

interface IMyPost {
    addPost: Function,
    clearForm: Function,
}

const MyPost = ({addPost, clearForm}: IMyPost) => {

    const addText = (values: any) => {
        addPost(values.post);
        clearForm();
    };
    return (
        <div className={style.myPostWrapper}>
            <h2>My posts</h2>
            <MyPostReduxForm onSubmit={addText} />
        </div>
    )
};

export default MyPost;

interface IMyPostForm {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void | null,
    pristine: boolean,
    submitting: boolean
}


const MyPostForm = ({handleSubmit, pristine, submitting}: IMyPostForm) => {
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <Field component={TextArea}
                   type='text' name='post'
                   placeholder='Your news...'
            />
            <button type="submit" disabled={pristine || submitting} className={style.button}>Add post</button>
        </form>
    )
};

const MyPostReduxForm: any = reduxForm({form: 'my-post-form'})(MyPostForm);

interface IMTextArea {
    input: any,
}
const TextArea = ({input, ...props}: IMTextArea) => {
    return (
        <div>
            <textarea  {...input} {...props} className={style.textArea}/>
        </div>
    )
};




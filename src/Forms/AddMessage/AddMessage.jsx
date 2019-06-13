import React from 'react';
import style from './AddMessage.module.scss';
import {Field, reduxForm} from "redux-form";


const AddMessage = ({addMessage, clearForm}) => {

    const addMessageItem = (values) => {
        addMessage(values.message);
        clearForm()
    };

    return (
        <div>
            <MessageFormConnect onSubmit={addMessageItem}/>
        </div>

    )
};

export default AddMessage;

const MessageForm = ({handleSubmit, pristine, submitting}) => {
    return (
        <form onSubmit={handleSubmit} className={style.messageContent}>
            <Field component={TextArea}
                      type="text"
                      name='message'
                      placeholder='Your message...'
            />
            <button type='submit' disabled={pristine || submitting} className={style.button}>Send Reply</button>
        </form>
    )
};
const MessageFormConnect = reduxForm({form: 'my-message'})(MessageForm);

const TextArea = ({input, ...props}) => {
    return (
        <div>
            <textarea {...input} {...props} className={style.textarea}/>
        </div>
    )
}

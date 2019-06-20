import React from 'react';
import style from './AddMessage.module.scss';
import {Field, reduxForm} from "redux-form";

interface IAddMessage {
    addMessage: Function,
    clearForm: Function
    handleSubmit: Function,
    pristine: any,
    submitting: any
}

const AddMessage = ({addMessage, clearForm}:IAddMessage) => {

    const addMessageItem = (values: any) => {
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

interface IMessageForm {
    handleSubmit: any,
    pristine: any,
    submitting: any
}

const MessageForm = ({handleSubmit, pristine, submitting}:IMessageForm) => {
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

interface ITextArea {
    input: any
}

const TextArea = ({input, ...props}:ITextArea) => {
    return (
        <div>
            <textarea {...input} {...props} className={style.textarea}/>
        </div>
    )
}

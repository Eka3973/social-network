import React, {FormEvent, useState} from 'react';
import style from "./ProfileStatus.module.scss";
import {Field, reduxForm} from "redux-form";

interface ProfileStatus {
    saveNewStatus: Function,
    initialValues: any,
}



const ProfileStatus = ({saveNewStatus, initialValues}: ProfileStatus) => {

    const [isHidden, showForm] = useState(false);

    const showFormForChange = (e: React.MouseEvent) => {
        e.preventDefault();
        showForm(!isHidden)
    };


    const addStatus = (values:any) => {
        saveNewStatus(values.status);
        showForm(!isHidden)
    };

    const formForChangeStatus = !!isHidden &&
        <FormStatusConnect onSubmit={addStatus} initialValues={{status: initialValues}}/>;

    return (
        <div className={style.wrapper}>
            <button type='button' onClick={showFormForChange} className={style.status}>
                {initialValues === '' ? 'Your Status' : initialValues}
            </button>
            {formForChangeStatus}

        </div>
    )

};
export default ProfileStatus;

interface FormStatus {
    handleSubmit: any
}

const FormStatus = ({handleSubmit}:FormStatus) => {
    return (
        <form onSubmit={handleSubmit} className={style.changeStatusWrapper}>
            <Field component={TextArea}
                   type="text"
                   name='status'
                   placeholder='Change status'

            />
            <button type='submit'>Save</button>
        </form>
    )

};

const  FormStatusConnect = reduxForm({form: 'form-status'})(FormStatus);

interface TextArea {
    input:any
}

const TextArea = ({input, ...props}:TextArea) => {
    return(
        <div>
            <textarea {...input}  {...props} />
        </div>
    )
};

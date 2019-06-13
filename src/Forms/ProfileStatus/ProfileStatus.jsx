import React, {useState} from 'react';
import style from "./ProfileStatus.module.scss";
import {Field, reduxForm} from "redux-form";


// const ProfileStatus = ({status, saveNewStatus}) => {
//
//     const [newStatus, changeMyStatus] = useState('');
//     const [isHidden, showForm] = useState(false);
//
//     const showFormForChange = (e) => {
//         e.preventDefault();
//         showForm(!isHidden)
//     };
//
//     const onChangeValue = (e) => {
//         e.preventDefault();
//         changeMyStatus(e.currentTarget.value);
//
//     };
//     const addStatus = (e) => {
//         e.preventDefault();
//         saveNewStatus(newStatus);
//         showForm(!isHidden)
//     };
//
//     const formForChangeStatus = !!isHidden &&
//         <form onSubmit={addStatus} className={style.changeStatusWrapper}>
//             <textarea onChange={onChangeValue} placeholder='Change status' value={newStatus}/>
//             <button type='submit'>Save</button>
//         </form>;
//
//     return (
//         <div className={style.wrapper}>
//             <button type='button' onClick={showFormForChange} className={style.status}>
//                 {status === '' ? 'Your Status' : status}
//             </button>
//             {formForChangeStatus}
//
//         </div>
//     )
//
// };
// export default ProfileStatus;


const ProfileStatus = ({saveNewStatus, initialValues}) => {

    const [isHidden, showForm] = useState(false);

    const showFormForChange = (e) => {
        e.preventDefault();
        showForm(!isHidden)
    };


    const addStatus = values => {
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

const FormStatus = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.changeStatusWrapper}>
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

const TextArea = ({input, ...props}) => {
    return(
        <div>
            <textarea {...input}  {...props} />
        </div>
    )
};

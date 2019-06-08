import React, {useState} from 'react';
import style from "./ProfileStatus.module.scss";


const ProfileStatus = ({status, saveNewStatus}) => {

    const [newStatus, changeMyStatus] = useState('');
    const [isHidden, showForm] = useState(false);

    const showFormForChange = (e) => {
        e.preventDefault();
        showForm(!isHidden)
    };

    const onChangeValue = (e) => {
        e.preventDefault();
        changeMyStatus(e.currentTarget.value);

    };
    const storedValueSettings = (e) => {
        e.preventDefault();
        saveNewStatus(newStatus);
        changeMyStatus("");
        showForm(!isHidden)
    };

    const formForChangeStatus = !!isHidden &&
        <form onSubmit={storedValueSettings} className={style.changeStatusWrapper}>
            <textarea onChange={onChangeValue} placeholder='Change status' value={newStatus}/>
            <button type='submit'>Save</button>
        </form>;

    return (
        <div className={style.wrapper}>
            <button type='button' onClick={showFormForChange} className={style.status}>
                {status === '' ? 'Your Status' : status}
            </button>
            {formForChangeStatus}

        </div>
    )

};
export default ProfileStatus;


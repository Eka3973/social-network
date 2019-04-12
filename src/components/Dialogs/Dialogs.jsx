import React from 'react';
import style from './Dialogs.module.scss';
import ConnectedDialogsUsers from "./DialogsUsers/DialogsUsersContainer";
import ConnectedMessage from "./Messages/MessagesContainer";
import ConnectedAddMessage from "./AddMessage/AddMessageContainer";

const Dialogs = () => {

    return (
        <div className={style.dialogsWrapper}>
            <ConnectedDialogsUsers/>
            <div className={style.messageWrapper}>
                <ConnectedMessage/>
                <ConnectedAddMessage/>
            </div>
        </div>
    )
};
export default Dialogs;






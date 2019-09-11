import React from 'react';
import style from './Dialogs.module.scss';
import ConnectedDialogsUsers from "./DialogsUsers/DialogsUsersConnect";
import ConnectedMessage from "./Messages/MessagesConnect";
import ConnectedAddMessage from "../../Forms/AddMessage/AddMessageConnect";

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






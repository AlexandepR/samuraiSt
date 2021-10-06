import React from 'react';
import s from './../Dialogs.module.css';


type messagesType = {
    id?: number
    message: string
}

const Message = (props:messagesType) => {
    return (
        <div>
        <div className={s.dialog}>{props.message}</div>
        </div>
    )
}













export default Message;

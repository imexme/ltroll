import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type ArrayState = {
    id: number
    name: string
    tasktype: string
}

type PropsType = {
    dialogs: string
    messages: string
    state: Array<ArrayState>
}

export function Dialogs(props:PropsType) {

    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.messages.map( m => <Message message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;
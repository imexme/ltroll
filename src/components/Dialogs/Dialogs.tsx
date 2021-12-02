


import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/state";

// type ArrayState = {
//     id: number
//     name: string
// }
//
// type PropsType = {
//     dialogs: string
//     messages: string
//     state: Array<ArrayState>
// }

export function Dialogs(props:DialogPageType) {
    let state = props.store.getState().dialogsPage
    let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.messages.map( m => <Message message={m.message}/> );

   let newMessageBody = props.state.newMessageBody
   let onSendMessageClick = () => {
       props.store.dispatch(sendMessageCreator())
   }

    let onNewMessageChange = (e) => {
      let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator() )
   }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
              <div>{ messagesElements }</div>
                <div>
                   <div><textarea
                       value={newMessageBody}
                       onChange={onNewMessageChange}
                       placeholder='enter your name'></textarea></div>
                   <div><button onClick={ onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
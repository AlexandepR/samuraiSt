import React, {ChangeEvent, createRef} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {DialogsTextType} from "../../redux/store";
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


type DialogsMessageType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: (text:string) => void              //text:string проверить
    dialogsPage: DialogsTextType
    isAuth: boolean
}

const Dialogs = (props: DialogsMessageType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values:any) => {   // пофиксить типизацию
        props.sendMessage(values.newMessageBody);
        // alert(values.newMessageBody);
    }

    if (props.isAuth === false) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
export default Dialogs;

                {/*<form>*/}
                {/*    <div><textarea*/}
                {/*        value={newMessageBody}*/}
                {/*        onChange={onNewMessageChange}*/}
                {/*        placeholder='Enter you message'> </textarea></div>*/}
                {/*    <div>*/}
                {/*        <button onClick={onSendMessageClick}>Send</button>*/}
                {/*    </div>*/}
                {/*</form>*/}

            {/*<textarea ref={addMessageRef}>+++</textarea><br></br>*/}


// const AddMessageForm = (props: any) => {   // пофиксить типизацию
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
//             </div>
//             <div>
//                 <button>Send</button>
//             </div>
//         </form>
//     )
// }
//
// const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)



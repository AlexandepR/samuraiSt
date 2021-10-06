import React from 'react';
import {DialogsTextType, RootStateType, StoreType} from "../../redux/store";
import {addNewMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


// type DialogsMessageType = {
//     dialogsPage: DialogsTextType
//     store: StoreType
// }
// const DialogsContainer = (props: DialogsMessageType) => {
//     const state = props.store.getState().dialogsPage
//
//
//     // const onSendMessageClick = () => {
//     //     props.store.dispatch(sendMessageActionCreator(state.newMessageBody))
//     // }
//
//     const onNewMessageChange = (text: string) => {
//         props.store.dispatch({type: 'CHANGE-NEW-MESSAGE-TEXT', newTextMessage: text})
//     }
//
//     return (
//         <Dialogs
//             updateNewMessageBody={onNewMessageChange}
//             sendMessage={onSendMessageClick}
//             dialogsPage={state}
//         />
//     )
// }
// type MapStatePropsType = {
//
// }

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (text: string) => {
            // dispatch({type: 'CHANGE-NEW-MESSAGE-TEXT', newTextMessage: text})
            dispatch( addNewMessageBodyActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

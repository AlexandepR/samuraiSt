import React from 'react';
import {DialogsTextType, RootStateType, StoreType} from "../../redux/store";
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (text: string) => {
            // dispatch({type: 'CHANGE-NEW-MESSAGE-TEXT', newTextMessage: text})
            dispatch( updateNewMessageBodyActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

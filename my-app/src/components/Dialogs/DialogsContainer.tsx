import React from 'react';
import {DialogsTextType, RootStateType, StoreType} from "../../redux/store";
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageBodyActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);
}
// let AuthRedirectComponent = (props: any) => {
//     if (props.isAuth === false) return <Redirect to ={'/login'}/>   //на уроке была классовая компонента, возможно должна быть в другом месте. перепроверить знак '/' возможно не нужен
//     return <Dialogs {...props}/>
// }


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;

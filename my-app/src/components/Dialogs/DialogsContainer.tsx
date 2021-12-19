import React from 'react';
import {RootStateType} from "../../redux/store";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageBodyActionCreator(text))
        },
        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageActionCreator(newMessageBody))
        }
    }
}

// compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     withAuthRedirect
// ) (Dialogs)
//
// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// let AuthRedirectComponent = (props: any) => {
//     if (props.isAuth === false) return <Redirect to ={'/login'}/>   //на уроке была классовая компонента, возможно должна быть в другом месте. перепроверить знак '/' возможно не нужен
//     return <Dialogs {...props}/>
// }

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)
// (AuthRedirectComponent);

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);

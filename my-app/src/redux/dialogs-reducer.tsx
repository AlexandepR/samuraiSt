

// export const  addNewMessageBodyActionCreator = (newTextMessage: string) => {
//     return {
//         type: 'CHANGE-NEW-MESSAGE-TEXT',
//         newTextMessage: newTextMessage
//     } as const
// }

// export const sendMessageActionCreator = (newText:string) => {
//     return {
//         type: 'SEND-MESSAGE',
//         newText: newText
//     } as const
// }

import {DialogsType, MessagesType, MyPostsType} from "./store";

let initialState: InitialStateDialogsType = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
        messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
],
    newMessageBody: ''

}

// const UPDATE_NEW_MESSAGE_BODY = 'CHANGE-NEW-MESSAGE-TEXT';
// const SEND_MESSAGE = 'SEND-MESSAGE'

export type InitialStateDialogsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

export const dialogsReducer = (state: InitialStateDialogsType = initialState,
                               action:NewMessageActionType):InitialStateDialogsType => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE-TEXT' : {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
            // state.newMessageBody = action.newTextMessage
            // state.newMessageBody = action.body
            // return state;
        case 'SEND-MESSAGE' :
            let newPost: MessagesType = {
                id: new Date().getTime(),
                message: state.newMessageBody
            }
            return{
                ...state,
                messages:[...state.messages, newPost],
                newMessageBody: ''
            }
            // let body = state.newMessageBody;
            // state.newMessageBody = '';
            // state.messages.push({id: 6, message: body});
            // return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}
export const  addNewMessageBodyActionCreator = (body: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        body: body
    } as const
}

export type NewMessageActionType = NewMessageType | AddNewMessageType
type NewMessageType = ReturnType<typeof sendMessageActionCreator>
type AddNewMessageType = ReturnType<typeof addNewMessageBodyActionCreator>
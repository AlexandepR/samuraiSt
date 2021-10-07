import {addPostActionCreator, changeNewTextActionCreator} from "./profile-reducer";
import {updateNewMessageBodyActionCreator, sendMessageActionCreator} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


export type RootStateType = {
    profilePostPage: MyPostsTextType
    dialogsPage: DialogsTextType
    sidebar: SidebarType
}

export type MyPostsTextType = {
    posts: Array<MyPostsType>
    newPostText: string
}
export type DialogsTextType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type SidebarType = {}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type MyPostsType = {
    id: number
    message: string | undefined
    likesCount: number
}


export type StoreType = {
    _state: RootStateType
    _rerenderTreeChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
}


export type ActionsType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof changeNewTextActionCreator> |
    ReturnType<typeof updateNewMessageBodyActionCreator> |
    ReturnType<typeof sendMessageActionCreator>


export const store: StoreType = {
    _state: {
        profilePostPage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post!!!', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _rerenderTreeChange() {
        // console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderTreeChange = observer;
    },
}















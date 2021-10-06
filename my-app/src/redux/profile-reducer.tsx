import {DialogsTextType, MyPostsTextType, MyPostsType, RootStateType, SidebarType} from "./store";


let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!!!', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: ''
}


// export const addPostActionCreator = (newPostText:string) => {
//     return {
//         type: 'ADD-POST',
//         postText: newPostText
//     } as const
// }
// export const changeNewTextActionCreator = (newText:string) => {
//     return {
//         type: 'CHANGE-NEW-TEXT',
//         newText: newText
//     } as const
// }

export type InitialStateType = {
    posts: Array<MyPostsType>
    newPostText: string
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: MyPostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        // return {
        //     ...state,
        //     posts: [...state.posts, newPost],
        //     newPostText: ''
        // }
        case 'CHANGE-NEW-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
            //     state.newPostText = action.newText;
            //     return state;
            // default:
            //     return state;
        }
        default:
            return state;
    }
}
const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const changeNewTextActionCreator = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText
    } as const
}

type ChangeNewTextActionType = ReturnType<typeof changeNewTextActionCreator>
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type ProfileActionsType = ChangeNewTextActionType | AddPostActionType
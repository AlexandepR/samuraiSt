import { MyPostsType} from "./store";


let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!!!', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: ''
}


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
            let stateCopy = {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: ''
            };
            return stateCopy
        }

        case 'CHANGE-NEW-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

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
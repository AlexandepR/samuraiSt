import {MyPostsType} from "./store";
import {profileAPI, usersAPI} from "../api/api";


let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!!!', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: '',
    profile: null,
    status: '',
}


export type InitialStateType = {
    posts: Array<MyPostsType>
    newPostText: string
    profile: any
    status: string
    updateStatus: string
}

export type ProfileType = {
    profile: any
    status: string
    updateStatus: string
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
                posts: [...state.posts, newPost],
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
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'} as const
}
export const changeNewTextActionCreator = (newText: string) => {

    return {type: 'CHANGE-NEW-TEXT', newText: newText} as const
}
export const setStatus = (status: string) => {

    return {type: 'SET-STATUS', status: status} as const
}
export const setUserProfile = (profile: null) => ({type: 'SET-USER-PROFILE', profile} as const)


export const getUserProfile = (userId: number) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}
export const getStatusProfile = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}
export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0)
                dispatch(setStatus(status));
        })
}

type ChangeNewTextActionType = ReturnType<typeof changeNewTextActionCreator>
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type setUserProfileType = ReturnType<typeof setUserProfile>
type getUserProfileType = ReturnType<typeof getUserProfile>
type setStatusType = ReturnType<typeof setStatus>

export type ProfileActionsType = ChangeNewTextActionType |
    AddPostActionType | setUserProfileType |
    setStatusType | getUserProfileType
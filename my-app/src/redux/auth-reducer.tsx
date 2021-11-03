import { MyPostsType} from "./store";
import {sendMessageActionCreator} from "./dialogs-reducer";

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    name: string
    status: string
    location: UserLocation,
    photos: {
        small: string | null,
        large: string | null
    }
}

export type UserLocation = {
    city: string
    country: string
}

export type InitialStateType = {
    id: number | string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    // isFetching: boolean
}

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: true
}


type ActionsType = ReturnType<typeof setAuthUserDataAc>

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserDataAc = (id: number | string | null, email: string | null, login: string | null,) => (
    {type: 'SET-USER-DATA', data: {id, email, login}} as const)

export default authReducer
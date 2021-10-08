import {ActionsType, MyPostsType} from "./store";
import {sendMessageActionCreator} from "./dialogs-reducer";

export type UserType = {
    userId: number
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

const initialState: InitialStateType = {
    users: []
}

export type InitialStateType = {
    users: Array<UserType>
}



type userReducerAC = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

const usersReducer = (state: InitialStateType = initialState , action: userReducerAC): InitialStateType=> {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.userId === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.userId === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET-USERS':
            return { ...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW',userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users } as const)

export default usersReducer
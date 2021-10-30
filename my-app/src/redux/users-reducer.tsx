import {ActionsType, MyPostsType} from "./store";
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
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}



type userReducerAC = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setUsersTotalCountAC> |
    ReturnType<typeof toggleIsFethingAC>

const usersReducer = (state: InitialStateType = initialState , action: userReducerAC): InitialStateType=> {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
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
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case 'SET-USERS':
            return { ...state, users: action.users}

        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
}

export const followAC = (id: number) => ({type: 'FOLLOW', id} as const)
export const unfollowAC = (id: number) => ({type: 'UNFOLLOW',id} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users } as const)
export const setCurrentPageAC = (currentPage: number) => ({type:'SET-CURRENT-PAGE', currentPage} as const)
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type:'SET-TOTAL-USERS-COUNT', totalUsersCount} as const)
export const toggleIsFethingAC = (isFetching: boolean) => ({type:'TOGGLE-IS-FETCHING', isFetching} as const)
export default usersReducer
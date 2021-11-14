import {ActionsType, MyPostsType} from "./store";
import {sendMessageActionCreator} from "./dialogs-reducer";
import {usersAPI} from "../api/api";

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


type userReducerAC = ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleIsFething> |
    ReturnType<typeof toggleFollowingProgress>

const usersReducer = (state: InitialStateType = initialState, action: userReducerAC): InitialStateType => {
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
            return {...state, users: action.users}

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
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id != action.id)
            }

        default:
            return state;
    }
}

export const follow = (id: number) => ({type: 'FOLLOW', id} as const)
export const unfollow = (id: number) => ({type: 'UNFOLLOW', id} as const)
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount
} as const)
export const toggleIsFething = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, id: number) => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    isFetching,
    id
} as const)

export const getUsersThunkCreator = () => {
    return (dispatch) => {
        dispatch(toggleIsFething(true));

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            dispatch(toggleIsFething(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        });
    }
}


export default usersReducer
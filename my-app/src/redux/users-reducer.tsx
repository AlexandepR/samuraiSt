import { MyPostsType} from "./store";


let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Alex', status: 'I am a boss', location: {city:'Minsk',country:'Belarus'}},
        {id: 2, followed: true, fullName: 'Lily', status: 'I am a boss', location: {city:'Moscow',country:'Russia'}},
        {id: 3, followed: false, fullName: 'Ilya', status: 'I am a boss', location: {city:'Kiev',country:'Ukraine'}},
    ],
    newPostText: ''
}


 const usersReducer = (state: any , action: any)=> {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
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
                    if (u.id === action.userId) {
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

export const followAC = (userId) => ({type: 'FOLLOW', userId})

export const unfollowAC = (userId) => ({type: 'UNFOLLOW',userId})

export const setUsersAC = (users) => ({type: 'SET-USERS', users })

export default usersReducer
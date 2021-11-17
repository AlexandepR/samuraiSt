import {authAPI} from "../api/api";


export type InitialStateType = {
    id: number | string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
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

export const getAuthUserData = () => (dispatch:any) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0 ) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserDataAc(id, email, login))
            }
        });
}

export default authReducer
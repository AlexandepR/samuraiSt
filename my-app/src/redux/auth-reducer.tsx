import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


export type InitialStateType = {
    id: number | string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    captcha: string
}

 export const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
     captcha: ''
}


type ActionsType = ReturnType<typeof setAuthUserDataAc>

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserDataAc = (id: number | string | null, email: string | null, login: string | null, isAuth:boolean) => (
    {type: 'SET-USER-DATA', payload: {id, email, login, isAuth}} as const)

export const getAuthUserData = () => (dispatch: any) => {                    //типизировать
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0 || 10) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserDataAc(id, email, login, true))
            }
        });
}

export const login = (email: string, password: string, rememberMe: boolean,captcha:string) => {
    return async (dispatch: any) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 10 || 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}


export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAc(null, null, null, false))
            }
        });
}





export default authReducer
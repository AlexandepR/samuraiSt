import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";


export type InitialStateType = {
    initialized: boolean
}

export const initialState: InitialStateType = {
    initialized: false
}


type ActionsType = ReturnType<typeof initializedSuccessAc>

const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccessAc = () => ({type: 'INITIALIZED_SUCCESS'})

export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthUserData())
    dispatch(initializedSuccessAc())
}


export default appReducer
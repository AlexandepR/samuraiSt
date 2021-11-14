import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'


export const rootReducer = combineReducers({
    profilePostPage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer
    // profile: profileReducer
})


export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store

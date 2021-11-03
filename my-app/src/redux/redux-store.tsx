import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


export const rootReducer = combineReducers({
    profilePostPage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer,
    auth: authReducer
    // profile: profileReducer
})


export let store = createStore(rootReducer);
export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store

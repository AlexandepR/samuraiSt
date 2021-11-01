import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import usersReducer from "./users-reducer";


export const rootReducer = combineReducers({
    profilePostPage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer,
    // profile: profileReducer
})


export let store = createStore(rootReducer);
export type AppStateType = ReturnType<typeof rootReducer>

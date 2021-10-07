import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import usersReducer from "./users-reducer";


export let rootReducer = combineReducers({
    profilePostPage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})


export let store = createStore(rootReducer);



export type AppStateType = ReturnType<typeof rootReducer>


// export default store;
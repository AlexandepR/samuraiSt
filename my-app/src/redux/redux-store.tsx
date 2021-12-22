import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";
// import { Form, Field } from 'react-final-form';

export const rootReducer = combineReducers({
    profilePostPage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
    // profile: profileReducer
})


export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store

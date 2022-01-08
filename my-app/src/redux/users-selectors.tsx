import {AppStateType} from "./redux-store";
import {InitialStateType} from "./users-reducer";

export const getUsers = (state: AppStateType) => {
    return state.users
    // return state.users
}
export const getPageSize = (state: AppStateType) => {
    return state.users.pageSize;
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.users.totalUsersCount;
}
export const getCurrentPage = (state: AppStateType) => {
    return state.users.currentPage;
}
export const getIsFetching = (state: AppStateType) => {
    return state.users.isFetching;
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.users.followingInProgress;
}
import React from "react";
import {connect} from "react-redux";
// import {Users} from "./Users";
import Users from "./UsersAPIComponent";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import UsersAPIComponent from "./UsersAPIComponent";

type OwnProps = {}

type MapStateToPropsType = {
    usersPage: InitialStateType,
    pageSize: number,
    totalUserCount: number,
    currentPage: number
}

type mapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = MapStateToPropsType & mapDispatchToProps & OwnProps

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUserCount: state.users.totalUserCount,
        currentPage: state.users.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect<MapStateToPropsType, mapDispatchToProps, OwnProps, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
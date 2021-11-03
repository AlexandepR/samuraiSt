import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount, toggleIsFething,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType} from "../../redux/users-reducer";
import axios from 'axios';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


type OwnProps = {}

type MapStateToPropsType = {
    usersPage: InitialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

type mapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFething: (isFetching: boolean) => void
}

type GetUsersType = {
    error: string | null,
    items: UserType[],
    totalCount: number,
    setCurrentPage: (value: number) => void
    onPageChanged: (value: number) => void
}

export type UsersPropsType = MapStateToPropsType & mapDispatchToProps & OwnProps

class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.toggleIsFething(true);

        usersAPI.getUsers( this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFething(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFething(true)
        usersAPI.getUsers( pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFething(false)
                this.props.setUsers(data.items)
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.usersPage.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
//     return {
//         follow: followAC,
//         unfollow: unfollowAC,
//         setUsers: setUsersAC,
//         setCurrentPage: setCurrentPageAC,
//         setTotalUsersCount: setUsersTotalCountAC,
//         toggleIsFetching: toggleIsFethingAC
//     }
// }

export const UsersContainerAll =
    connect<MapStateToPropsType, mapDispatchToProps, OwnProps, AppStateType>(mapStateToProps,
        {
            follow, unfollow, setUsers, setCurrentPage,
            setTotalUsersCount, toggleIsFething
        }
    )(UsersContainer)
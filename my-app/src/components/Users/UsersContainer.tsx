import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    setCurrentPage, toggleFollowingProgress,
    requestUsers,
    unfollowSuccess, followSuccess
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";


type OwnProps = {}

type MapStateToPropsType = {
    users: InitialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}
// type MapStateToPropsType = {
//     // usersPage: (state: AppStateType) => void,
//     users: any,
//     pageSize: (state: AppStateType) => void,
//     totalUsersCount: (state: AppStateType) => void,
//     currentPage: (state: AppStateType) => void,
//     isFetching: (state: AppStateType) => void,
//     followingInProgress: (state: AppStateType) => void,
// }

type mapDispatchToProps = {
    followSuccess: (userId: number) => void
    unfollowSuccess: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users.users}
                   follow={this.props.followSuccess}
                   unfollow={this.props.unfollowSuccess}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

// let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         usersPage: state.users,
//         pageSize: state.users.pageSize,
//         totalUsersCount: state.users.totalUsersCount,
//         currentPage: state.users.currentPage,
//         isFetching: state.users.isFetching,
//         followingInProgress: state.users.followingInProgress,
//     }
// }
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}



export default compose<React.ComponentType>(
    connect<MapStateToPropsType, mapDispatchToProps, OwnProps, AppStateType>(mapStateToProps,
        {
            followSuccess, unfollowSuccess,
            setCurrentPage,
            toggleFollowingProgress,requestUsers})
) (UsersContainer)
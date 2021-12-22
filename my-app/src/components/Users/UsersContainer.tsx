import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    setCurrentPage, toggleFollowingProgress, getUsers, unfollowSuccess, followSuccess
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";



type OwnProps = {}

type MapStateToPropsType = {
    usersPage: InitialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

type mapDispatchToProps = {
    followSuccess: (userId: number) => void
    unfollowSuccess: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.usersPage.users}
                   follow={this.props.followSuccess}
                   unfollow={this.props.unfollowSuccess}
                   followingInProgress={this.props.followingInProgress}

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
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress,
    }
}



export default compose<React.ComponentType>(
    connect<MapStateToPropsType, mapDispatchToProps, OwnProps, AppStateType>(mapStateToProps,
        {
            followSuccess, unfollowSuccess,
            setCurrentPage,
            toggleFollowingProgress,getUsers})
) (UsersContainer)
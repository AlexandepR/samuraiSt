import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
// import Users from "./UsersAPIComponent";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC, toggleIsFethingAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
// import UsersAPIComponent from "./UsersAPIComponent";
import axios from 'axios';
import loader from '../../assets/images/loader.gif'


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
    toggleIsFetching: (isFetching: boolean) => void
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
        this.props.toggleIsFetching(true);
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <>
        {this.props.isFetching ?
            <div>
                <img src={loader} width="100" height="100"/>
            </div> : null }
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
        },
            toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFethingAC(isFetching))
        }
        }
        }

        export const UsersContainerAll =
        connect<MapStateToPropsType, mapDispatchToProps, OwnProps, AppStateType>(mapStateToProps,
        mapDispatchToProps)(UsersContainer)
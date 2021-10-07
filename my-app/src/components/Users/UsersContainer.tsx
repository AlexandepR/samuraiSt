import React from "react";
import {connect} from "react-redux";
import Users from "./users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispath) => {
    return {
    follow: {userId} => {
        dispatch(followAC(userId));
    },
        unfollow: {userId} => {
            dispatch(unfollowAC(userId));
    },
        setUsers: (users) => {
        dispatch(setUsersAC(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
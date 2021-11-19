import React, {ComponentType, useEffect} from "react";
import Profile from "../Profile";
import {RouteComponentProps, withRouter} from "react-router";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from 'react-redux';
import {getUserProfile, updateStatus, getStatus} from "../../../redux/profile-reducer";
import {RootStateType} from "../../../redux/store";
import {compose} from "redux";
import {ProfileType} from "../../../api/api";


type PathParamsType = {
    userId: any
}

type MapStatePropsType = {
    profile: ProfileType
    status: string
    // isAuth: boolean
}
let mapStateToPropsForRedirect = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}


type MapDispatchPropsType = {
    getUserProfile: (profile: number) => void
    getStatus: (status: string | number) => void
    updateStatus:(status:string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

function ProfileContainer(props: PropsType) {
    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        props.getUserProfile(userId)
        props.getStatus(userId)
    }, [])


    return (
        <Profile
            // props={props}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
        />
    )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePostPage.profile,
    status: state.profilePostPage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)


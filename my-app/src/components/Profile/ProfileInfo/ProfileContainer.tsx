import React, {useEffect} from "react";
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
    authorizedUserId: string | number | null
    isAuth: boolean
}
// let mapStateToPropsForRedirect = (state: RootStateType) => {
//     return {
//         isAuth: state.auth.isAuth
//     }
// }


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
            userId = props.authorizedUserId;
            if(!userId) {
                props.history.push('/login')
            }
        }
        props.getUserProfile(userId)
        props.getStatus(userId)
    }, [])


    return (
        <Profile
            {...props}
            // props={props}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
        />
    )
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePostPage.profile,
    status: state.profilePostPage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth

})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)


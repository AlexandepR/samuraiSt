import React, {useEffect} from "react";
import Profile from "../Profile";
import { RouteComponentProps, withRouter } from "react-router";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from "../../../redux/profile-reducer";
import {usersAPI} from "../../../api/api";


type PathParamsType = {
    userId: any
}

type MapStatePropsType = {
    profile: ProfileType
}


type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

function ProfileContainer (props: PropsType) {
    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        usersAPI.getProfile(userId).then(response => {
            props.setUserProfile(response.data)
        })
    },[])

        return (
                <Profile profile={props.profile} />
        )
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePostPage.profile
})


export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
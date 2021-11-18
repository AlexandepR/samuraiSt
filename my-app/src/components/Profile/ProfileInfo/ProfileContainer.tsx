import React, {useEffect} from "react";
import Profile from "../Profile";
import {RouteComponentProps, withRouter} from "react-router";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from 'react-redux';
import {getUserProfile, ProfileType} from "../../../redux/profile-reducer";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {RootStateType} from "../../../redux/store";


type PathParamsType = {
    userId: any
}

// type MapStatePropsType = {
//     profile: ProfileType
//     isAuth: boolean
// }
let mapStateToPropsForRedirect = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let MapStatePropsType  = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


type MapDispatchPropsType = {
    getUserProfile: (profile: any) => void
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
    }, [])


    return (
        <Profile profile={props.profile}/>
    )
}

// let AuthRedirectComponent = (props: PropsType) => {
//     if (props.isAuth === false) return <Redirect to ={'/login'}/>   //на уроке была классовая компонента, возможно должна быть в другом месте. перепроверить знак '/' возможно не нужен
//     return <ProfileContainer {...props}/>
// }
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

AuthRedirectComponent = connect (mapStateToPropsForRedirect)(AuthRedirectComponent)


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePostPage.profile,
})


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)




export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
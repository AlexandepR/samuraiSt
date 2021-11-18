import React, {ComponentType, useEffect} from "react";
import Profile from "../Profile";
import {RouteComponentProps, withRouter} from "react-router";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from 'react-redux';
import {getUserProfile, ProfileType} from "../../../redux/profile-reducer";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {RootStateType} from "../../../redux/store";
import {compose} from "redux";


type PathParamsType = {
    userId: any
}

type MapStatePropsType = {
    profile: ProfileType
    // isAuth: boolean
}
let mapStateToPropsForRedirect = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

// let MapStatePropsType  = (state: RootStateType) => {
//     return {
//         dialogsPage: state.dialogsPage,
//     }
// }


type MapDispatchPropsType = {
    getUserProfile: (profile: number) => void
    getUserStatus: (status: string | number) => void
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
        props.getUserStatus(userId)
    }, [])


    return (
        <Profile profile={props.profile}/>
    )
}

// let AuthRedirectComponent = (props: PropsType) => {
//     if (props.isAuth === false) return <Redirect to ={'/login'}/>   //на уроке была классовая компонента, возможно должна быть в другом месте. перепроверить знак '/' возможно не нужен
//     return <ProfileContainer {...props}/>
// }


// let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => ({
//     isAuth: state.auth.isAuth
// })

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePostPage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// AuthRedirectComponent = connect (mapStateToPropsForRedirect)(AuthRedirectComponent)




// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default withAuthRedirect(connect(mapStateToProps,
//     {getUserProfile})(WithUrlDataContainerComponent));
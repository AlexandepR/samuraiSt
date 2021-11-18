import React from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component:any) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />

            return <Component {...this.props}/>
        }
    }


    let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}
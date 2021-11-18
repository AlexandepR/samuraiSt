import React, {ComponentType} from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect  <T>(Component: ComponentType<T>) {

    const RedirectComponent = (props:MapStatePropsType) => {
        let{isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>

        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect (mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}


import React from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component: any) => {

    const RedirectComponent = (props:any) => {
        if (!props.isAuth) return <Redirect to='/login'/>
        return <Component value={100} {...props}/>
    }

    let ConnectedRedirectComponent = connect (mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}

            // if (!this.props.isAuth) return <Redirect to='/login'/>
            //
            // return <Component {...this.props}/>



    // let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    // return ConnectedAuthRedirectComponent

import React from "react";

export const withAuthRedirect = (Component:any) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />

            return <Component {...this.props}/>
        }
    }
    return RedirectComponent
}
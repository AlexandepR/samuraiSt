import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserDataAc} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";



class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0 ) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserDataAc(id, email, login)
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state:any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect (mapStateToProps, {setAuthUserDataAc})(HeaderContainer);
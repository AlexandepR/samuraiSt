import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAc} from "../../redux/auth-reducer";

type AuthMeType = {
    // data: UserType[]
    resultCode: number
    data: any
}
// type UserType = {
//     userId: number
//     login: string
//     email: string
// }

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get<AuthMeType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
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
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {initialState, InitialStateType, login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import style from './../common/FormsControls/FormsControls.module.css'


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    email: string | number
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       validate={[required]}
                       name={'email'}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       type={'password'}
                       validate={[required]}
                       name={'password'}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType> ({form: 'login'}) (LoginForm)

function Login(props: any) {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: any):MapStatePropsType => ({       //типизировать AppStateType
    isAuth: state.auth.isAuth
})
// export default connect( {login}) (Login);
export default connect(mapStateToProps, {login}) (Login);





// const LoginForm = (props: any) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={'Login'} name={'login'} component={'input'}/>
//             </div>
//             <div>
//                 <Field placeholder={'Password'} name={'password'} component={'input'}/>
//             </div>
//             <div>
//                 <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
//             </div>
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }
//
// const LoginReduxForm = reduxForm ({form: 'login'}) (LoginForm)
//
// function Login(props: any) {
//     const onSubmit = (formData: any) => {
//         console.log(formData)
//     }
//
//     return <div>
//         <h1>Login</h1>
//         <LoginReduxForm onSubmit={onSubmit}/>
//     </div>
// }
//
// export default Login;
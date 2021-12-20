import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";



type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       validate={[required]}
                       name={'login'}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       validate={[required]}
                       name={'password'}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType> ({form: 'login'}) (LoginForm)

function Login(props: any) {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;






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
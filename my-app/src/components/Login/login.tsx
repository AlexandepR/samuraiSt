import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props: any) => {
    return (
        <form>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm ({form: 'login'}) (LoginForm)

function Login(props: any) {
    return <div>
        <h1>Login</h1>
        <ReduxLoginForm />
    </div>
}

export default Login;
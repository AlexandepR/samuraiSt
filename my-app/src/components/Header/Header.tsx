import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css';

type HeaderType = {
    isAuth: boolean
    login: string
}

const Header = (props: any) => {
    return <header className={s.header}>

        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/42093/pouting-cat-emoji-clipart-sm.png"/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}

export default Header;
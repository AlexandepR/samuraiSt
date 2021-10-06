import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';



export type dialogsType = {
    id: number
    name: string
}

const DialogItem = (props: dialogsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;

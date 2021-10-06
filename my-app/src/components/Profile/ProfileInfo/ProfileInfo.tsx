import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <img
                alt=''
                src="https://www.digiseller.ru/preview/917746/p1_2822191_baa2d3c2.jpg"/>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
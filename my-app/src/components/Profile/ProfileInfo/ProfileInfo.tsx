import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props: ProfileType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img
                    alt=''
                    src="https://www.digiseller.ru/preview/917746/p1_2822191_baa2d3c2.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                {/*ava + description*/}
                <ProfileStatus status={'Hello'}/>
            </div>
        </div>
    )
}

export default ProfileInfo;
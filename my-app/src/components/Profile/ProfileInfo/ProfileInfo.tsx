import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import {ProfileType} from "../../../api/api";


type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus:(status:string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {
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
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;
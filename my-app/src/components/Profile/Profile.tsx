import React from "react";
import './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../api/api";


type ProfileUserType = {
    profile: ProfileType
    status: string
    updateStatus:(status:string) => void
}
const Profile = (props: ProfileUserType) => {

    return <div>
        <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
        />
        <MyPostsContainer />
    </div>
}

export default Profile;




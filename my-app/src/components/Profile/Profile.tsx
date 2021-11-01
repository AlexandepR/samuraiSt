import React from "react";
import './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";



const Profile = (props: ProfileType) => {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer

        />
    </div>
}

export default Profile;




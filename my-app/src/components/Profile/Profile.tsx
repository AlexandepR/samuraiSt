import React from "react";
import './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {
    ActionsTypes,
    MyPostsTextType,
    StoreType,
} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


// type ProfilePropsType = {
//     store: StoreType
//     // profilePostPage: MyPostsTextType
//     // dispatch: (action: ActionsTypes) => void
// }


// const Profile = (props:ProfilePropsType) => {
const Profile = () => {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer
            // store={props.store}

            // dispatch={props.dispatch}
            // newPostText={props.profilePostPage.newPostText}
        />
    </div>
}

export default Profile;
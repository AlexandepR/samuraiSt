import React from "react";
import {addPostActionCreator, changeNewTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePostPage.posts,
        // newPostText: state.profilePostPage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostActionCreator(newPostText));
        },
        // updateNewPostText: (text: string) => {
        //     //// dispatch({type: 'CHANGE-NEW-TEXT', newText: text})
        //     dispatch(changeNewTextActionCreator(text))
        // }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
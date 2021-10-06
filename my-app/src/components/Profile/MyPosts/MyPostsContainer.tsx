import React, {ChangeEvent} from "react";
import {ActionsTypes, MyPostsType, StoreType} from '../../../redux/store'
import {addPostActionCreator, changeNewTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


// type MyPostType = {
//     store: StoreType
// }


// const MyPostsContainer = (props: MyPostType) => {
//     const state = props.store.getState()
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator(state.profilePostPage.newPostText));
//     }
//
//     const onPostChange = (text: string) => {
//         props.store.dispatch({type: 'CHANGE-NEW-TEXT', newText: text})
//     }
//
//     return (<MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePostPage.posts}
//             newPostText={state.profilePostPage.newPostText}
//         />
//     )
// }

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePostPage.posts,
        newPostText: state.profilePostPage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text: string) => {
            // dispatch({type: 'CHANGE-NEW-TEXT', newText: text})
            dispatch(changeNewTextActionCreator(text))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
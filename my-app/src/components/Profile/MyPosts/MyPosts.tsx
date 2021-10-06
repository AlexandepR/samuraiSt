import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsType} from '../../../redux/store'



type MyPostType = {
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: Array<MyPostsType>
}


const MyPosts = (props: MyPostType) => {


    let postsElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>)


    let onAddPost = () => {
        props.addPost()
    }


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }


    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                        // ref={newPostElement}
                    > </textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
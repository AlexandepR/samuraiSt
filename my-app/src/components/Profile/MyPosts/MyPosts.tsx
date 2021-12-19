import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsType} from '../../../redux/store'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


type MyPostType = {
    addPost: (text:string) => void         //text:string проверить
    posts: Array<MyPostsType>
}

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props:any) => {         // пофиксить типизацию
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} placeholder={'Post message'}
                       validate={[required, maxLength10(10)]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)


const MyPosts = (props: MyPostType) => {

    let postsElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values: any) => {   // пофиксить типизацию
        props.addPost(values.newPostText)
    }
    // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.updateNewPostText(e.currentTarget.value)
    // }
    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}




export default MyPosts;
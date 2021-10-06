import React from "react";
import s from './Post.module.css'


const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img alt=''
                 src='https://i.pinimg.com/736x/a8/53/87/a85387440d54d8536c1f66b8eb8b2268--line-sketch-pencil.jpg'/>
            { props.message }
            <div>
                <span>{ props.like }</span>
            </div>
        </div>
    )
}


export default Post;


// <div className={s.item}>
//     <img src='https://i.pinimg.com/736x/a8/53/87/a85387440d54d8536c1f66b8eb8b2268--line-sketch-pencil.jpg'/>
//     post 1
// </div>
// <div className={s.item}>
//     <img src='https://vjoy.cc/wp-content/uploads/2020/03/tumbler-020-800x800-1.jpg'/>
//     post 2
// </div>
// <div className={s.item}>
//     <img src='https://sun1-93.userapi.com/s/v1/if1/D7Yvg5a7vSP4U1rYGwlisy1BBwxNRFSHSvvjwBdN6idcyuNxHj02s52JhRKxCKIm_MtQLNlF.jpg?size=400x0&quality=96&crop=44,44,935,1259&ava=1'/>
//     post 3
// </div>
// <div className='item'>
//     post 4
// </div>
// <div className='item'>
//     post 5
// </div>
// <div className='item'>
//     post 6
// </div>
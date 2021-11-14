import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/file.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type usersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
    // toggleFollowingProgress: (isFetching: boolean, id: number) => void
}
type deleteType = any
type PostType = any
// resultCode: any
// data: any
// config: any
// }

let Users = (props: usersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}
                    >{p}</span>
                })}
            </div>
            {/*<button onClick={this.getUsers} >Get Users</button>*/}
            {
                props.users.map((u: UserType) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some
                            (id => id === u.id)} onClick={() => {props.unfollow(u.id)}}>
                                Unfollow</button>

                            : <button disabled={props.followingInProgress.some
                            (id => id === u.id)} onClick={() => {props.follow(u.id)}}>
                            Follow</button>}
                    </div>
                </span>
                    <span>
                {/*<span>*/}
                        {/*    <div>*/}
                        {/*        <button>Follow</button>*/}
                        {/*    </div>*/}
                        {/*</span>*/}
                        <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
            <span>
                </span>
            </span>
                </div>)
            }
        </div>
    );
}

export default Users
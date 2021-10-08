import React from "react";
import styles from './users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";
import userPhoto from '../../assets/images/file.png'

type GetUsersType = {
    error: string | null,
    items: UserType[],
    totalCount: number
}

export function Users (props: UsersPropsType ) {
    if (props.usersPage.users.length === 0) {
        axios.get<GetUsersType>('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
            props.setUsers(response.data.items)
        })

        // props.setUsers([
        //     {
        //         userId: 1,
        //         photoUrl: 'https://cdna.artstation.com/p/marketplace/presentation_assets/000/040/294/large/file.png?1542056214',
        //         followed: false,
        //         fullName: 'Alex',
        //         status: 'I am a boss',
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        //         userId: 2,
        //         photoUrl: 'https://sun9-36.userapi.com/impf/wUr-rVUj-08o6N8TFZuHxHxKRUgv8z7Q3_rNwg/7XEfZONaVjc.jpg?size=441x604&quality=96&sign=3853d9d78dc0f34b7a3fccd743829706&c_uniq_tag=XE0JLLQjidglgzUXzkQ66-dxFwYJiiOsAncPppen80k&type=album',
        //         followed: true,
        //         fullName: 'Lily',
        //         status: 'I am a boss',
        //         location: {city: 'Moscow', country: 'Russia'}
        //     },
        //     {
        //         userId: 3,
        //         photoUrl: 'https://yt3.ggpht.com/a/AATXAJx4Hd4pqbzZzWUGUrrZ7-qR6sltreGp5czUv1gp5w=s900-c-k-c0xffffffff-no-rj-mo',
        //         followed: false,
        //         fullName: 'Ilya',
        //         status: 'I am a boss',
        //         location: {city: 'Kiev', country: 'Ukraine'}
        //     },
        // ]);
}
return (
    <div>
        {
            props.usersPage.users.map(u => <div key={u.userId}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto } className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.userId)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.userId)}}>Follow</button>}
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
                    {/*<div>{u.location}</div>*/}
                    {/*<div>{u.location.city}</div>*/}
                </span>
            </span>
            </div>)
        }
        </div>
    );
    }
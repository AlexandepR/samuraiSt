import React from "react";
import styles from './users.module.css';
import axios from "axios";
import {UserType} from "../../redux/users-reducer";
import userPhoto from '../../assets/images/file.png'

type GetUsersType = {
    error: string | null,
    items: UserType[],
    totalCount: number,
    setCurrentPage: (value: number) => void
    onPageChanged: (value: number) => void
}

class UsersAPIComponent extends React.Component<any, any> {

    componentDidMount() {
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }

        return <Users />
    }
}

export default UsersAPIComponent;
import axios from "axios";
import {UserType} from "../redux/users-reducer";

type GetUsersType = {
    // error: string | null,
    items: UserType[],
    totalCount: number,
    // setCurrentPage: (value: number) => void
    // onPageChanged: (value: number) => void
}

const instance = axios.create ( {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5dcf0849-ab0d-483c-8d6a-fcf48b466bd1'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }}


export const getUsers2 = (currentPage: number = 1, pageSize: number = 10) => {
    return instance.get<GetUsersType>(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
}
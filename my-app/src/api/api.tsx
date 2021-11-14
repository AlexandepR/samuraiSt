import axios from "axios";
import {UserType} from "../redux/users-reducer";

type GetUsersType = {
    items: UserType[],
    totalCount: number,
    userId: number
}
type deleteType = any
type PostType = any



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
    },
    follow(userId:number) {
       return instance.post<PostType>(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,)
    },
    unfollow(userId: number) {
      return  instance.delete<deleteType>(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,)
    }
}


export const getUsers2 = (currentPage: number = 1, pageSize: number = 10) => {
    return instance.get<GetUsersType>(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
}
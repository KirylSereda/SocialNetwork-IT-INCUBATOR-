import React from "react";
import axios from 'axios'
import { UserType } from "../Redux/types";
import { Users } from "./Users";


type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void

}

export class UserAPIComponent extends React.Component<PropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChange = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return <Users
            totalUsersCount={this.props.totalUsersCount}
            users={this.props.users}
            onPageChange={this.onPageChange}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

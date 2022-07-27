import { connect } from "react-redux";
import { AppRootStateType } from "../Redux/redux-store";
import { UserType } from "../Redux/types";
import { follow, setCurrentPage, setFollowingInProgress, getUsers, unfollow } from "../Redux/users-reducer";
import React from "react";
import { Users } from "./Users";
import { Preolder } from "../Common/Preolder";
import { compose } from "redux";

type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    follow: (userId: number) => any,
    unfollow: (userId: number) => any,
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preolder />
                : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    users={this.props.users}
                    onPageChange={this.onPageChange}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />}
        </>
    }
}

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<number>
    isFetching: boolean
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,
        isFetching: state.usersPage.isFetching
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow, unfollow,
        setCurrentPage,
        setFollowingInProgress,
        getUsers
    }))(UsersContainer)

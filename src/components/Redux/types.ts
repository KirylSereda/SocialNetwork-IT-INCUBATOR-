import { SendMessageAT, UpdateNewMessageBodyAT } from './dialogs-reducer'
import { AddPostAT, UpdateNewPostTextAT } from './profile-reducer'
import {
    FollowAT,
    SetCurrentPageAT,
    SetIsFetchingAT,
    SetTotalUsersCountAT,
    SetUsersAT,
    UnfollowAT,
} from './users-reducer'

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ActionsType =
    | AddPostAT
    | UpdateNewPostTextAT
    | SendMessageAT
    | UpdateNewMessageBodyAT
    | FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | SetIsFetchingAT

import { SetUserDataAT } from './auth-reducer'
import { SendMessageAT, UpdateNewMessageBodyAT } from './dialogs-reducer'
import { AddPostAT, SetStatusAT, UpdateNewPostTextAT, UsetUserProfileAT } from './profile-reducer'
import {
    FollowAT,
    SetCurrentPageAT,
    SetFollowingInProgressAT,
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

export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType
    status: string
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
    followingInProgress: Array<number>
}

export type Auth = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

export type AuthDataType = {
    id: number
    email: string
    login: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    auth: Auth
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
    | UsetUserProfileAT
    | SetUserDataAT
    | SetFollowingInProgressAT
    | SetStatusAT

import { SendMessageAT, UpdateNewMessageBodyAT } from './dialogs-reducer'
import { AddPostAT, UpdateNewPostTextAT } from './profile-reducer'

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

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ActionsType = AddPostAT | UpdateNewPostTextAT | SendMessageAT | UpdateNewMessageBodyAT

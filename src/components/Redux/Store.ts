let rerenderEntireTree = () => {}

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
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: StateType = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi', likesCount: 12 },
            { id: 2, message: 'How are you?', likesCount: 12 },
            { id: 3, message: 'Yo', likesCount: 12 },
            { id: 4, message: 'Yo', likesCount: 12 },
            { id: 5, message: 'Yo', likesCount: 12 },
            { id: 6, message: 'Yo', likesCount: 12 },
        ],
        newPostText: '1',
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrew' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Victor' },
            { id: 6, name: 'Valera' },
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
            { id: 6, message: 'Yo' },
        ],
    },
}

export const addPost = () => {
    state.profilePage.posts.push({ id: 5, message: state.profilePage.newPostText, likesCount: 1 })
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}
export const upDateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree()
}

export const subscriber = (observer: () => void) => {
    rerenderEntireTree = observer
}

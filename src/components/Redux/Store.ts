export type PostsType = Array<PostType>
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = Array<DialogType>
export type DialogType = {
    id: number
    name: string
}

export type MessagesType = Array<MessageType>
export type MessageType = {
    id: number
    message: string
}

export type stateType = {
    profilePage: {
        posts: PostsType
    }
    dialogsPage: {
        dialogs: DialogsType
        messages: MessagesType
    }
}

export let state: stateType = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi', likesCount: 12 },
            { id: 2, message: 'How are you?', likesCount: 12 },
            { id: 3, message: 'Yo', likesCount: 12 },
            { id: 4, message: 'Yo', likesCount: 12 },
            { id: 5, message: 'Yo', likesCount: 12 },
            { id: 6, message: 'Yo', likesCount: 12 },
        ],
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

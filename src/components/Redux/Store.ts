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
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
    dispatch: (action: any) => void
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'ADD-NEW-MESSAGE'

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi', likesCount: 12 },
                { id: 2, message: 'How are you?', likesCount: 12 },
                { id: 3, message: 'Yo', likesCount: 12 },
                { id: 4, message: 'Yo', likesCount: 12 },
                { id: 5, message: 'Yo', likesCount: 12 },
                { id: 6, message: 'Yo', likesCount: 12 },
            ],
            newPostText: '',
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
            newMessageBody: '',
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('ss')
    },

    subscriber(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._state.profilePage.posts.push({
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 1,
            })
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber()
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({ id: 6, message: body })
            this._callSubscriber()
        }
    },
}

export const addPostAC = () => {
    return { type: ADD_POST }
}

export const updateNewPostTextAC = (newText: string) => {
    return { type: UPDATE_NEW_POST_TEXT, newPostText: newText }
}

export const sendMessageAC = () => {
    return { type: SEND_MESSAGE }
}

export const updateNewMessageBodyAC = (body: string) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}

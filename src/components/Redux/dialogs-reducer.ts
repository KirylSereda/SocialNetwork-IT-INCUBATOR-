import { ActionsType, DialogsPageType } from './types'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'ADD-NEW-MESSAGE'

let initialState: DialogsPageType = {
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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({ id: 6, message: body })
            return state
        default:
            return state
    }
}

export type SendMessageAT = ReturnType<typeof sendMessageAC>
export type UpdateNewMessageBodyAT = ReturnType<typeof updateNewMessageBodyAC>

export const sendMessageAC = () => {
    return { type: SEND_MESSAGE } as const
}

export const updateNewMessageBodyAC = (body: string) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body } as const
}

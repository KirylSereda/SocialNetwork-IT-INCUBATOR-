import { ActionsType, DialogsPageType } from './Store'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'ADD-NEW-MESSAGE'

export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
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

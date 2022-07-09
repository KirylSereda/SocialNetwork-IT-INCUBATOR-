import { sendMessageAC, updateNewMessageBodyAC } from '../Redux/dialogs-reducer'
import { ActionsType, DialogType, MessageType, } from '../Redux/types'
import { Dialogs } from './Dialogs'


type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action: ActionsType) => void
}

export const DialogsContainer = (props: PropsType) => {

    let sendMessage = () => {
        props.dispatch(sendMessageAC())
    }

    let updateNewMessageBody = (text: string) => {
        props.dispatch(updateNewMessageBodyAC(text))
    }

    return (
        <Dialogs updateNewMessageBody={updateNewMessageBody}
            sendMessage={sendMessage}
            dialogs={props.dialogs}
            messages={props.messages}
            newMessageBody={props.newMessageBody}
        />
    )

}
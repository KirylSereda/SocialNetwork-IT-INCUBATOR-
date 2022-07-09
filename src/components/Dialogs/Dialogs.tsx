import { ChangeEvent } from 'react'
import { sendMessageAC, updateNewMessageBodyAC } from '../Redux/dialogs-reducer'
import { ActionsType, DialogType, MessageType, } from '../Redux/types'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void

}

export const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messages.map(m => <Message message={m.message} />)

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <  div className={s.messages}>
                <div> {messagesElements}</div>
                <div>
                    <div><textarea value={props.newMessageBody}
                        placeholder='Enter your Message'
                        onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div >
    )

}
import { ChangeEvent } from 'react'
import { sendMessageAC, updateNewMessageBodyAC } from '../Redux/dialogs-reducer'
import { ActionsType, DialogsPageType, DialogType, MessageType, } from '../Redux/types'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'

type PropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
}

export const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} />)

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
                    <div><textarea value={props.dialogsPage.newMessageBody}
                        placeholder='Enter your Message'
                        onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div >
    )

}
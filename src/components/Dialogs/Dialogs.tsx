

import { DialogsType, MessagesType } from '../Redux/Store'
import { DialogItem } from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import { Message } from './Message/Message'

type PropsType = {
    dialogs: DialogsType
    messages: MessagesType
}

export const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <  div className={s.messages}>
                {messagesElements}
            </div>

        </div >
    )

}
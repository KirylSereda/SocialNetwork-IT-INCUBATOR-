
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

type DialogProps = {
    name: string
    id: number
}

type MessageProps = {
    message: string
}
const Message = (props: MessageProps) => {
    return (
        <div className={s.message}>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

const Dialog = (props: DialogProps) => {

    return (
        < div className={s.dialog} >
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink >
        </ div>
    )
}

export const Dialogs = () => {
    const dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' }
    ]
    const messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' }
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id} />
                <Dialog name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <  div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>

        </div >
    )

}
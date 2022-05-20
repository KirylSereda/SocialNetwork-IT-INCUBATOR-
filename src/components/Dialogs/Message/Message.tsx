import s from './../Dialogs.module.css'

type MessageProps = {
    message: string
}


export const Message = (props: MessageProps) => {
    return (
        <div className={s.message}>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

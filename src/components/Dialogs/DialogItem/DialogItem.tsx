import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

type DialogProps = {
    name: string
    id: number
}

export const DialogItem = (props: DialogProps) => {

    return (
        < div className={s.dialog} >
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink >
        </ div>
    )
}
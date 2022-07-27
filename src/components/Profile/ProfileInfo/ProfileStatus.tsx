import { ChangeEvent, useEffect, useState } from "react"

type PropsType = {
    status: string
    updateStatus: (title: string) => void
}
export const ProfileStatus = (props: PropsType) => {

    const [title, setTitle] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)
    const onEditMode = () => setEditMode(true)

    const offEditMode = () => {
        setEditMode(false)
        props.updateStatus(title)
    }
    useEffect(() => {

        setTitle(props.status)
    }, [props.status])

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return (
        <div>
            {editMode
                ? <input autoFocus onBlur={offEditMode} onChange={onChangeSetTitle} value={title} />
                : <span onDoubleClick={onEditMode}>{title || 'no status'}</span>
            }
        </div>
    )
}
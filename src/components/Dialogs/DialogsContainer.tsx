import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { sendMessageAC, updateNewMessageBodyAC } from '../Redux/dialogs-reducer'
import { AppRootStateType } from '../Redux/redux-store'
import { DialogsPageType } from '../Redux/types'
import { Dialogs } from './Dialogs'

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    auth: boolean
}

type mapDispatchToPropsType = {
    sendMessage: () => void,
    updateNewMessageBody: (text: string) => void
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        auth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageBodyAC(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
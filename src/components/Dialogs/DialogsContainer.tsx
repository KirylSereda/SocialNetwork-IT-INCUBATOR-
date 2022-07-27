import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { WithAuthRedirect } from '../../hoc/withAuthRedirect'
import { sendMessageAC, updateNewMessageBodyAC } from '../Redux/dialogs-reducer'
import { AppRootStateType } from '../Redux/redux-store'
import { DialogsPageType } from '../Redux/types'
import { Dialogs } from './Dialogs'

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
    sendMessage: () => void,
    updateNewMessageBody: (text: string) => void
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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


export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)
import { authReducer } from './auth-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { combineReducers, createStore } from 'redux'
import { usersReducer } from './users-reducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export let store = createStore(reducers)

export type AppRootStateType = ReturnType<typeof reducers>

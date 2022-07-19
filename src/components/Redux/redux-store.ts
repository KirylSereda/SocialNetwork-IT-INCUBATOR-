import { authReducer } from './auth-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { usersReducer } from './users-reducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof reducers>

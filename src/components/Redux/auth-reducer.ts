import { Dispatch } from 'redux'
import { authAPI } from '../../api/api'
import { ActionsType, AuthDataType, Auth } from './types'

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: 2,
    login: '',
    email: '',
    isAuth: false,
}

export const authReducer = (state: Auth = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return { ...state }
    }
}

export type SetUserDataAT = ReturnType<typeof setUserData>

export const setUserData = (authData: AuthDataType) => {
    return { type: SET_USER_DATA, data: authData } as const
}

export const getAuthUserData = (dispatch: Dispatch) => {
    authAPI.me().then((response) => {
        if (response.data.resultCode == 0) {
            dispatch(setUserData(response.data.data))
        }
    })
}

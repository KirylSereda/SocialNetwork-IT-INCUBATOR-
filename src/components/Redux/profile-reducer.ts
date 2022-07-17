import { ActionsType, ProfilePageType } from './types'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        { id: 1, message: 'Hi', likesCount: 12 },
        { id: 2, message: 'How are you?', likesCount: 12 },
        { id: 3, message: 'Yo', likesCount: 12 },
        { id: 4, message: 'Yo', likesCount: 12 },
        { id: 5, message: 'Yo', likesCount: 12 },
        { id: 6, message: 'Yo', likesCount: 12 },
    ],
    newPostText: '',
    profile: {},
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                post: [
                    state.posts.push({
                        id: 5,
                        message: state.newPostText,
                        likesCount: 1,
                    }),
                ],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.newPostText }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        default:
            return { ...state }
    }
}

export type AddPostAT = ReturnType<typeof addPostAC>
export type UpdateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>
export type UsetUserProfileAT = ReturnType<typeof setUserProfile>

export const addPostAC = () => {
    return { type: ADD_POST } as const
}
export const setUserProfile = (profile: any) => {
    return { type: SET_USER_PROFILE, profile } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return { type: UPDATE_NEW_POST_TEXT, newPostText: newText } as const
}

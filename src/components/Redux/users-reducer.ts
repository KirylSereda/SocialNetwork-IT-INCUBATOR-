import { ActionsType, UsersPageType, UserType } from './types'

const FOLLLOW = 'FOLLOW'
const UNFOLLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState: UsersPageType = {
    users: [],
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLLOW:
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id !== action.userId ? u : { ...u, followed: true },
                ),
            }
        case UNFOLLLOW:
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id !== action.userId ? u : { ...u, followed: false },
                ),
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            }
        default:
            return { ...state }
    }
}

export type FollowAT = ReturnType<typeof followAC>
export type UnfollowAT = ReturnType<typeof unfollowAC>
export type setUsersAT = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => {
    return { type: FOLLLOW, userId } as const
}

export const unfollowAC = (userId: number) => {
    return { type: UNFOLLLOW, userId } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return { type: SET_USERS, users } as const
}

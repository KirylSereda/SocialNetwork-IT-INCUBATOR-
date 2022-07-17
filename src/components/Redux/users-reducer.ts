import { ActionsType, UsersPageType, UserType } from './types'

const FOLLLOW = 'FOLLOW'
const UNFOLLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 3,
    isFetching: false,
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
                users: [...action.users],
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return { ...state }
    }
}

export type FollowAT = ReturnType<typeof followAC>
export type UnfollowAT = ReturnType<typeof unfollowAC>
export type SetUsersAT = ReturnType<typeof setUsersAC>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCountAC>
export type SetIsFetchingAT = ReturnType<typeof setIsFetchingAC>

export const followAC = (userId: number) => {
    return { type: FOLLLOW, userId } as const
}

export const unfollowAC = (userId: number) => {
    return { type: UNFOLLLOW, userId } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return { type: SET_USERS, users } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return { type: SET_CURRENT_PAGE, currentPage } as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return { type: SET_TOTAL_USERS_COUNT, totalUsersCount } as const
}
export const setIsFetchingAC = (isFetching: boolean) => {
    return { type: TOGGLE_IS_FETCHING, isFetching } as const
}

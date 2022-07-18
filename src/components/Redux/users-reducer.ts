import { ActionsType, UsersPageType, UserType } from './types'

const FOLLLOW = 'FOLLOW'
const UNFOLLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 3,
    isFetching: false,
    followingInProgress: [1, 2],
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((u) => u !== action.userId),
            }
        default:
            return { ...state }
    }
}

export type FollowAT = ReturnType<typeof follow>
export type UnfollowAT = ReturnType<typeof unfollow>
export type SetUsersAT = ReturnType<typeof setUsers>
export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
export type SetIsFetchingAT = ReturnType<typeof setIsFetching>
export type SetFollowingInProgressAT = ReturnType<typeof setFollowingInProgress>

export const follow = (userId: number) => {
    return { type: FOLLLOW, userId } as const
}

export const unfollow = (userId: number) => {
    return { type: UNFOLLLOW, userId } as const
}

export const setUsers = (users: Array<UserType>) => {
    return { type: SET_USERS, users } as const
}

export const setCurrentPage = (currentPage: number) => {
    return { type: SET_CURRENT_PAGE, currentPage } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return { type: SET_TOTAL_USERS_COUNT, totalUsersCount } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return { type: TOGGLE_IS_FETCHING, isFetching } as const
}
export const setFollowingInProgress = (isFetching: boolean, userId: number) => {
    return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const
}

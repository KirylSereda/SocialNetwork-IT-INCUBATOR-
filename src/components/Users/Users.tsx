import axios from 'axios'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/user.png'
import { UserType } from '../Redux/types'
import style from './Users.module.css'

type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChange: (p: number) => void
}

export const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && style.selected}
                        onClick={() => props.onPageChange(p)}
                    >{p}</span>
                })
            }
        </div>{
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img className={style.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>{u.followed ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "a0295f8a-9fa1-4dbc-8a4a-eedb6d5d31b8"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.unfollow(u.id)
                                }
                            })
                    }}>Unfollow</button> :
                        <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "a0295f8a-9fa1-4dbc-8a4a-eedb6d5d31b8"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }

                                })
                        }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/* <div>{u.location.city}</div> */}
                        {/* <div>{u.location.country}</div> */}
                    </span>
                </span>
            </div>)
        }</div>
}
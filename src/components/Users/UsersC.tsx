import React from "react";
import style from './Users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/images/user.png'
import { UserType } from "../Redux/types";


type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void
}

export class UserC extends React.Component<PropsType, {}> {
    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>{
            this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={style.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </div>
                    <div>{u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> :
                        <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}

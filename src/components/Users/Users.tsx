import { UserType } from '../Redux/types'
import style from './Users.module.css'

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: PropsType) => {
    if (props.users.length == 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                photoUrl:
                    'https://cdnn21.img.ria.ru/images/07e5/09/13/1750803268_691:0:2738:2047_1280x0_80_0_0_06d9c433f207bf159fdeca70de6c24c0.jpg',
                fullName: 'Kiryll',
                status: 'I am boss',
                location: { city: 'Minsk', country: 'Belarus' },
            },
            {
                id: 2,
                followed: true,
                photoUrl:
                    'https://cdnn21.img.ria.ru/images/07e5/09/13/1750803268_691:0:2738:2047_1280x0_80_0_0_06d9c433f207bf159fdeca70de6c24c0.jpg',
                fullName: 'Dmitry',
                status: 'I am boss too',
                location: { city: 'Moscow', country: 'Russia' },
            },
            {
                id: 3,
                followed: false,
                photoUrl:
                    'https://cdnn21.img.ria.ru/images/07e5/09/13/1750803268_691:0:2738:2047_1280x0_80_0_0_06d9c433f207bf159fdeca70de6c24c0.jpg',
                fullName: 'Katya',
                status: 'I am boss too',
                location: { city: 'Kiev', country: 'Ukraine' },
            },
        ])

    }

    return (
        <div>{
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={style.userPhoto} src={u.photoUrl} />
                    </div>
                    <div>{u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                        <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>

            </div>)
        }</div>
    )
}
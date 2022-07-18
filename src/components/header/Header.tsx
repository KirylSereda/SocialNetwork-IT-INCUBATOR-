import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setUserData } from '../Redux/auth-reducer';
import { AppRootStateType } from '../Redux/redux-store';
import { AuthDataType } from '../Redux/types';
import s from './Header.module.css';

export const Header = () => {
    let dispatch = useDispatch()
    let isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    let authData = useSelector<AppRootStateType, AuthDataType>(state => state.auth)
    useEffect(() => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(setUserData(response.data.data))
                }

            })
    }, [])

    return <div className={s.header}>
        <img alt='img-header' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/2048px-Check_green_icon.svg.png' />
        <div className={s.loginBlock}>
            {isAuth ? authData.login : <NavLink to='/login'>Login</NavLink>}
        </div>
    </div>

}


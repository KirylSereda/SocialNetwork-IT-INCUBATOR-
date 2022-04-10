import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';

export const Navbar = () => {
    return <nav className={s.nav}>
        <div >
            <NavLink to='/profile' className={({ isActive }) => (isActive ? s.activeLink : s.notactiveLink)}>s</NavLink>
        </div>
        <div >
            <NavLink to='/dialog' className={({ isActive }) => (isActive ? s.activeLink : s.notactiveLink)}>s</NavLink>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav >
}


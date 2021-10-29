import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            {/*<div className={s.item}>*/}
            {/*    <a>Hitta Körskola</a>*/}
            {/*</div>*/}
            {/*<div className={s.item}>*/}
            {/*    <a>Privat övningkörning</a>*/}
            {/*</div>*/}
            <br></br>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';

import Classes from './Navigation.module.css';
import Profile from './../../assets/images/profile.svg';
import Message from './../../assets/images/message.svg';
import News from './../../assets/images/news.svg';
import Music from './../../assets/images/music.svg';
import Settings from './../../assets/images/settings.svg';

const Navbar = () => {
    return <nav className={Classes.nav}>
        <button className={Classes.navButton}>
            <object data={Profile} type="image/svg+xml" height='20' width= '25'></object>
            <NavLink to='/profile' className={Classes.navMenu} activeClassName={Classes.activeLink}>Profile</NavLink>
        </button>
        <button className={Classes.navButton}>
            <object data={Message} type="image/svg+xml" height='20' width= '25'></object>
            <NavLink to='/messages' className={Classes.navMenu} activeClassName={Classes.activeLink}>Messages</NavLink>
        </button>
        <button className={Classes.navButton}>
            <object data={News} type="image/svg+xml" height='20' width= '25'></object>
            <NavLink to='/news' className={Classes.navMenu} activeClassName={Classes.activeLink}>News</NavLink>
        </button>
        <button className={Classes.navButton}>
            <object data={Music} type="image/svg+xml" height='20' width= '25'></object>
            <NavLink to='/music' className={Classes.navMenu} activeClassName={Classes.activeLink}>Music</NavLink>
        </button>
        <button className={Classes.navButton}>
            <object data={Settings} type="image/svg+xml" height='20' width= '25'></object>
            <NavLink to='/settings' className={Classes.navMenu} activeClassName={Classes.activeLink}>Settings</NavLink>
        </button>
    </nav>
}

export default Navbar;
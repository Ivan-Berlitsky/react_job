import React from 'react';
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
            <a href='/profile' className={Classes.navMenu}>Profile</a>
        </button>
        <button className={Classes.navButton}>
            <object data={Message} type="image/svg+xml" height='20' width= '25'></object>
            <a href='/messages' className={Classes.navMenu}>Messages</a>
        </button>
        <button className={Classes.navButton}>
            <object data={News} type="image/svg+xml" height='20' width= '25'></object>
            <a href='/news' className={Classes.navMenu}>News</a>
        </button>
        <button className={Classes.navButton}>
            <object data={Music} type="image/svg+xml" height='20' width= '25'></object>
            <a href='/music' className={Classes.navMenu}>Music</a>
        </button>
        <button className={Classes.navButton}>
            <object data={Settings} type="image/svg+xml" height='20' width= '25'></object>
            <a href='/settings' className={Classes.navMenu}>Settings</a>
        </button>
    </nav>
}

export default Navbar;
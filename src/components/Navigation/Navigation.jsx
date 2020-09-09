import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import Classes from './Navigation.module.css';
import Profile from './../../assets/images/profile.svg';
import Message from './../../assets/images/message.svg';
import News from './../../assets/images/news.svg';
import Music from './../../assets/images/music.svg';
import Settings from './../../assets/images/settings.svg';
import BestFriend from './BestFriend';

const Navbar = (props) => {
    console.log(props.state[0].src)
    return (
        <div className="navigation">
             <nav className={Classes.nav}>
            <button className={Classes.navButton}>
                <object data={Profile} type="image/svg+xml" height='20' width= '25' aria-labelledby='profile'></object>
                <NavLink to='/profile' className={Classes.navMenu} activeClassName={Classes.activeLink}>Profile</NavLink>
            </button>
            <button className={Classes.navButton}>
                <object data={Message} type="image/svg+xml" height='20' width= '25' aria-labelledby='messages'></object>
                <NavLink to='/messages' className={Classes.navMenu} activeClassName={Classes.activeLink}>Messages</NavLink>
            </button>
            <button className={Classes.navButton}>
                <object data={News} type="image/svg+xml" height='20' width= '25' aria-labelledby='news'></object>
                <NavLink to='/news' className={Classes.navMenu} activeClassName={Classes.activeLink}>News</NavLink>
            </button>
            <button className={Classes.navButton}>
                <object data={Music} type="image/svg+xml" height='20' width= '25' aria-labelledby='music'></object>
                <NavLink to='/music' className={Classes.navMenu} activeClassName={Classes.activeLink}>Music</NavLink>
            </button>
            <button className={Classes.navButton}>
                <object data={Settings} type="image/svg+xml" height='20' width= '25' aria-labelledby='settings'></object>
                <NavLink to='/settings' className={Classes.navMenu} activeClassName={Classes.activeLink}>Settings</NavLink>
            </button>
        </nav>
            <Route path='/profile'  render={ () => <BestFriend state={props.state}/>}/>
        </div>
       
    );
}

export default Navbar;
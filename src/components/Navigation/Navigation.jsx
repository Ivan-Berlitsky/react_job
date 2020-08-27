import React from 'react';
import classes from './Navigation.module.css';
import profile from './../../assets/images/profile.svg';
const Navbar = () => {
    return <nav className={classes.nav}>
        <div>
            <object data={profile} type="image/svg+xml" height='20' width= '20'></object>
            <a>Profile</a>
        </div>
        <div>
            <a>Messages</a>
        </div><div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;
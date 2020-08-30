import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';
import logo from './../../assets/images/logo.png';
import search from './../../assets/images/search.ico';


const Header = () => {
    return (
    <header className={classes.header}>
        <div className={classes.headerWrap}>
            <div className={classes.logo}>
                <NavLink to="/profile"><img src={logo} alt="logo"/></NavLink>
                <NavLink to='/profile' className={classes.logoName}>Social network</NavLink>
            </div>
            <div className={classes.search}>
                <form action="#" method='post'>
                    <input className={classes.searchField} type="text" placeholder='Enter your search phrase'/>
                    <button className={classes.buttonSearch}><img src={search} alt="search"/></button>
                </form>
            </div>
         </div> {/* headerWrap */}
        
    </header>);
}

export default Header;
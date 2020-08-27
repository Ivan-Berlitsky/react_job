import React from 'react';
import classes from './Header.module.css';
import logo from './../../assets/images/logo.png';
import search from './../../assets/images/search.ico';

const Header = () => {
    return (
    <header className={classes.header}>
        <div className={classes.headerWrap}>
            <div className={classes.logo}>
                <a href="#"><img src={logo} alt="logo"/></a>
                <a href='#' className={classes.logoName}>Social network</a>
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
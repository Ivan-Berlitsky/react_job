import React from 'react';
import { NavLink } from 'react-router-dom';

import Classes from './Friends.module.css'


const FriendItem = (props) =>{
    
    return(
        <NavLink to={'/messages/' + props.id} className={Classes.friendItem}>
            <img className={Classes.friendAvatar} src={props.src} alt="avatar"/>
            {props.name}
        </NavLink>
    ); 
    // name, src, id
}

export default FriendItem;
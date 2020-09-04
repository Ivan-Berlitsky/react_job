import React from 'react';
import { NavLink } from 'react-router-dom';

import Classes from './Friends.module.css'
import array from '../../data/DataFriends';


const FriendsItem = array.map( (element) => {
    return (
        <NavLink to={'/messages/' + element.id} className={Classes.friendItem}>
            <img className={Classes.friendAvatar} src={element.src} alt="avatar"/>
            {element.name}
        </NavLink>
    );
})

export default FriendsItem;
import React from 'react';
import { NavLink } from 'react-router-dom';

import Classes from './Friends.module.css'

const FriendsItem = (props) => {

        const item = props.dataFriends.map((element) => {
            return(
                <li key={element.id}>
                    <NavLink to={'/messages/' + element.id} className={Classes.friendItem}>
                        <img className={Classes.friendAvatar} src={element.src} alt="avatar"/>
                        {element.name}
                    </NavLink>
                </li>
                
            );
         })
    return item;
}


export default FriendsItem;
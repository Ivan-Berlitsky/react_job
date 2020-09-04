import React from 'react';

import Classes from './Messages.module.css';
import Classes2 from './Friends.module.css';
import DataFriends from '../../data/DataFriends';
import FriendsItem from './FriendsItem';
import MessagesItem from './MessagesItem';

const Messages = () => {
    return (
        <div className={Classes.messages}>
            {console.log(DataFriends)}
            <div className={Classes2.friends}>
                {FriendsItem}
            </div>

            <div className={Classes.blockMessages}>
                {MessagesItem}
            </div>
            
        </div>
    );
}
export default Messages;

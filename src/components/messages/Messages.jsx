import React from 'react';

import Classes from './Messages.module.css';
import Classes2 from './Friends.module.css';
import FriendsItem from './FriendsItem';
import MessagesItem from './MessagesItem';

const Messages = (props) => {
    return (
        <div className={Classes.messages}>
            <div className={Classes2.friends}>
                <FriendsItem dataFriends={props.dataFriends}/>
            </div>

            <div className={Classes.blockMessages}>
                <MessagesItem dataMessages={props.dataMessages} />
            </div>
            
        </div>
    );
}
export default Messages;

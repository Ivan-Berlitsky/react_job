import React from 'react';

import Classes from './Messages.module.css';
import Classes2 from './Friends.module.css';
import FriendsItem from './FriendsItem';
import MessagesItem from './MessagesItem';

const Messages = (props) => {
    return (
        <div className={Classes.messages}>
            <div className={Classes2.friends}>
                <FriendsItem arrFriends={props.arrFriends}/>
            </div>

            <div className={Classes.blockMessages}>
                <MessagesItem arrMessages={props.arrMessages} />
            </div>
            
        </div>
    );
}
export default Messages;

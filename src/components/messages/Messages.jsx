import React from 'react';

import Classes from './Messages.module.css';
import Classes2 from './Friends.module.css';
import FriendsItem from './FriendsItem';
import MessagesItem from './MessagesItem';
import MessagesInput from './MessagesInput';

const Messages = (props) => {
    return (
        <div className={Classes.messages}>
            <div className={Classes2.friends}>
                <ul>
                    <FriendsItem dataFriends={props.state.friends}/>
                </ul>
                
            </div>

            <div className={Classes.blockMessages}>
                <ul>
                <MessagesItem dataMessages={props.state.messages} />
                </ul>


                <MessagesInput />
            </div>
            
        </div>
    );
}
export default Messages;

import React from 'react';

import Classes from './Messages.module.css';
import Classes2 from './Friends.module.css';
import DataFriends from './data/DataFriends';
import DataMessages from './data/DataMessages';

const Messages = () => {
    return (
        <div className={Classes.messages}>
            {console.log(DataFriends)}
            <div className={Classes2.friends}>
                {DataFriends}
            </div>

            <div className={Classes.blockMessages}>
                {DataMessages}
            </div>
            
        </div>
    );
}
export default Messages;

import React from 'react';

import Classes from './Messages.module.css';
import array from '../../data/DataMessages';


const MessagesItem = array.map((element) => {
    return (
    <div className={Classes.messagesItem}>
        {element.text}
    </div>
    );
}) 

export default MessagesItem;
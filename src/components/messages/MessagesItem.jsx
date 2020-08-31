import React from 'react';

import Classes from './Messages.module.css';

const MessagesItem = (props) => {
    return (
    <div className={Classes.messagesItem}>
        {props.text}
    </div>
    );
}

export default MessagesItem;
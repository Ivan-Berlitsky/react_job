import React from 'react';

import classes from './Messages.module.css'

const MessagesInput = () => {
    return (
        <div className={classes.messagesInput}>
            <textarea className={classes.messagesInputTxt} cols="79" rows="5"></textarea>
        </div>
    );
}

export default MessagesInput;
import React from 'react';

import Classes from './Messages.module.css';

const MessagesItem = (props) => {
    
    const array = props.arrMessages.map( (element, index) => {

        return(
            <li className={Classes.messagesItem} key={index}>
                    {element.text}
            </li>
        );
    })
return array;
}

export default MessagesItem;
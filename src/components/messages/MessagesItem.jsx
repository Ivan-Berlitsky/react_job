import React from 'react';

import Classes from './Messages.module.css';

const MessagesItem = (props) => {
    const item = props.dataMessages.map( (element, index) => {
        return(

                <li className={Classes.messagesItem} key={index}>
                    {element.text}
                </li>

            
        );
    })
return item;
}

export default MessagesItem;
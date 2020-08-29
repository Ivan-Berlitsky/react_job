import React from 'react';
import Classes from './Messages.module.css';

const Messages = () => {
    return (
        <div className={Classes.messages}>
            <div className={Classes.friend}>
                <div className={Classes.friendItem}>Friend 1</div>
                <div className={Classes.friendItem}>Friend 2</div>
                <div className={Classes.friendItem}>Friend 3</div>
                <div className={Classes.friendItem}>Friend 4</div>
                <div className={Classes.friendItem}>Friend 5</div>
                <div className={Classes.friendItem}>Friend 6</div>
                <div className={Classes.friendItem}>Friend 7</div>

            </div>
            <div className={Classes.blockMessages}>
                <div className={Classes.messagesItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!</div>
                <div className={Classes.messagesItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!</div>
                <div className={Classes.messagesItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!</div>
                <div className={Classes.messagesItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!</div>
                <div className={Classes.messagesItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!</div>
                <div className={Classes.messagesItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!</div>
                
            </div>
            
        </div>
    );
}
export default Messages;

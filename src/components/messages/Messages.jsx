import React from 'react';
import Classes from './Messages.module.css';
import { NavLink } from 'react-router-dom';
import friendItem from './FriendItem'
import FriendItem from './FriendItem';

const Messages = () => {
    return (
        <div className={Classes.messages}>
            <div className={Classes.friend}>
                <FriendItem name='Олег Григорашенко' src='https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg' id='000001' />
                <FriendItem name='Данил Чернов' src='https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg' id='000002'/>
                <FriendItem name='Павел Залога' src='https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg' id='000003'/>
                <FriendItem name='Евгений Кладовиков' src='https://download-cs.net/steam/avatars/3412.jpg' id='000004' />
                <FriendItem name='Роман Скляр' src='https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg' id='000005'/>
                <FriendItem name='Сергей Фокин' src='https://cs16planet.ru/steam-avatars/images/avatar2700.jpg' id='000006'/>


            </div>
            <div className={Classes.blockMessages}>
                <div className={Classes.messagesItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!</div>
                <div className={Classes.messagesItem}>Дарова, когда на профоосмотр?</div>
                <div className={Classes.messagesItem}>Тебя 1-го не будет?</div>
                <div className={Classes.messagesItem}>Ты направление взял?</div>
                <div className={Classes.messagesItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!</div>
                <div className={Classes.messagesItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!</div>
                
            </div>
            
        </div>
    );
}
export default Messages;

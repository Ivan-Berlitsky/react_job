import React from 'react';

import MessagesItem from '../MessagesItem';
import Classes from './../Messages.module.css';

let array = [
    {text: 'Ку, вагоны смотрели?)', id: '00001'},
    {text: 'Дарова, когда на профоосмотр?', id: '00002'},
    {text: 'Тебя 1-го не будет?', id: '00003'},
    {text: 'Ты направление взял?', id: '00004'},
    {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!', id: '00005'},
    {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!', id: '00006'}
]

let DataMessages = array.map( (element) =>{
    return(
        <MessagesItem text = {element.text} id = {element.id}></MessagesItem>
    );
})

export default DataMessages;
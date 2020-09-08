import React from 'react';

import Classes from './PostAdd.module.css'

const PostAdd = () => {
    return (
        <form className={Classes.form} action="#" method='post' name='addPost'>
          <input className={Classes.postAddField} type="text" name="addPost" id="addPost"/>
          <button className={Classes.postAddButton} type="submit">Отправить</button>
        </form>
    );
}

export default PostAdd;
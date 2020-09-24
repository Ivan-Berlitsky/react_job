import React from 'react';

import classes from './PostAdd.module.css'

const PostAdd = (props) => {
  const state = props.store.getState();

  const postInput = React.createRef();

    const addPost = () =>{
      const dispatch = props.store.dispatch.bind(props.store);
      dispatch(addPostActionCreator());
    }

    const postAddText = () => { 
      const dispatch = props.store.dispatch.bind(props.store);
      dispatch(postAddTextActionCreator(postInput));
    }

  return (
       <div className={classes.postAdd}>
          <input className={classes.postAddField} type="text" ref={postInput} onChange={postAddText} value={state.stateProfile.postInputText}/>
          <button className={classes.postAddButton} onClick={addPost}>Отправить</button>
       </div>    
  );
}

const addPostActionCreator = () => {
  return {
    type: 'POSTADD'
  }
}
const postAddTextActionCreator = (input) => {
  return {
    type: 'POSTINPUT',
    text: input.current.value
  }
}

export default PostAdd;
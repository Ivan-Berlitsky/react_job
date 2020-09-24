import React from 'react';

import classes from './PostAdd.module.css'

const PostAdd = (props) => {
  const state = props.store.getState();

  const postInput = React.createRef();

    const addPost = () =>{
      const postAdd = props.store.dispatch.bind(props.store);
      postAdd({
        type: 'POSTADD',
      });
    }

    const postAddText = () => { 
      const textAdd = props.store.dispatch.bind(props.store);
      textAdd({
        type: 'POSTINPUT',
        text: postInput.current.value
      });
    }

  return (
       <div className={classes.postAdd}>
          <input className={classes.postAddField} type="text" ref={postInput} onChange={postAddText} value={state.stateProfile.postInputText}/>
          <button className={classes.postAddButton} onClick={addPost}>Отправить</button>
       </div>    
  );
}

export default PostAdd;
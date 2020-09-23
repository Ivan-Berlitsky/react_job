import React from 'react';

import classes from './PostAdd.module.css'

const PostAdd = (props) => {
  const state = props.store.getState();

  const postInput = React.createRef();

    let addPost = () =>{
      let postInputValue = postInput.current.value;
      props.store.postAdd(postInputValue)
    }

    let postAddText = () => {
      props.store.postInput(postInput.current.value);
      
    }

  return (
       <div className={classes.postAdd}>
          <input className={classes.postAddField} type="text" ref={postInput} onChange={postAddText} value={state.stateProfile.postInputText}/>
          <button className={classes.postAddButton} onClick={addPost}>Отправить</button>
       </div>    
  );
}

export default PostAdd;
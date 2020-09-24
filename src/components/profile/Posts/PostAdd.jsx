import React from 'react';

import classes from './PostAdd.module.css'

const PostAdd = (props) => {
  const state = props.store.getState();

  const postInput = React.createRef();

    const addPost = () =>{
      let postInputValue = postInput.current.value;
      props.store.postAdd(postInputValue)
    }

    const postAddText = () => { 
      const postInputBind = props.store.postInput.bind(props.store);
      postInputBind(postInput.current.value);
    }

  return (
       <div className={classes.postAdd}>
          <input className={classes.postAddField} type="text" ref={postInput} onChange={postAddText} value={state.stateProfile.postInputText}/>
          <button className={classes.postAddButton} onClick={addPost}>Отправить</button>
       </div>    
  );
}

export default PostAdd;
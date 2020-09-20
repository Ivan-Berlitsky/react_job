import React from 'react';

import classes from './PostAdd.module.css'

const PostAdd = (props) => {

    const postInput = React.createRef();

    let addPost = () =>{
      let postInputValue = postInput.current.value;

      props.state.postAdd(postInputValue)
    }

    let postAddText = () =>{
      // console.log(postInput.current.value)
      props.state.postInput(postInput.current.value);
    }

  return (
       <div className={classes.postAdd}>
          <input className={classes.postAddField} type="text" ref={postInput} onChange={postAddText} value={props.state.postInputText}/>
          <button className={classes.postAddButton} onClick={addPost}>Отправить</button>
       </div>    
    );
}

export default PostAdd;
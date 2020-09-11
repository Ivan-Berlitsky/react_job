import React from 'react';

import classes from './PostAdd.module.css'

const PostAdd = (props) => {

    const postInput = React.createRef();
    let addPost = () =>{
      let postInputValue = postInput.current.value;
      // alert(postInputValue)
      console.log(props.state);
      props.state.postAdd(postInputValue)
    }
  return (
       <div className={classes.postAdd}>
         <input className={classes.postAddField} type="text" ref={postInput}/>
          <button className={classes.postAddButton} onClick={addPost}>Отправить</button>
       </div>    
    );
}

export default PostAdd;
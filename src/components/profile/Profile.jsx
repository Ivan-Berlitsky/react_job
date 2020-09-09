import React from 'react';

import Post from './posts/Post';
import PostAdd from './posts/PostAdd';
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <div className={classes.imgContain}>
        <img src='https://i.pinimg.com/originals/ba/6c/d4/ba6cd45d22f01b59c1c4605c4e6dabab.jpg' alt="wallpaper"/>
      </div>
      <div>
        ava + description
      </div>
      <div>
        <PostAdd />
      </div>
      <Post state={props.state} />
    </div>
    );  
};

export default Profile;

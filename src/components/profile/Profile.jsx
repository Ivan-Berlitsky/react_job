import React from 'react';
import Post from './Posts/Post';
import classes from './Profile.module.css';


const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.imgContain}>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt="image"/>
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
      </div>
      <Post name='Евгения Берлицкая' score='23' text="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Minus id ut tempora assumenda? Asperiores tenetur adipisci sed facere doloremque fuga tempore amet, commodi repellat? Repellat voluptate ducimus minima dolore. Aperiam." />
      <Post name='Андрей Берлицкий' score='54' text="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Minus id ut tempora assumenda? Asperiores tenetur adipisci sed facere doloremque fuga tempore amet, commodi repellat? Repellat voluptate ducimus minima dolore. Aperiam.loremLorem ipsum dolor sit amet consectetur adipisicing elit. Minus id ut tempora assumenda? Asperiores tenetur adipisci sed facere doloremque fuga tempore amet, commodi repellat? Repellat voluptate ducimus minima dolore. Aperiam.loremLorem ipsum dolor sit amet consectetur adipisicing elit. Minus id ut tempora assumenda? Asperiores tenetur adipisci sed facere doloremque fuga tempore amet, commodi repellat? Repellat voluptate ducimus minima dolore. Aperiam.loremLorem ipsum dolor sit amet consectetur adipisicing elit. Minus id ut tempora assumenda? Asperiores tenetur adipisci sed facere doloremque fuga tempore amet, commodi repellat? Repellat voluptate ducimus minima dolore. Aperiam.loremLorem ipsum dolor sit amet consectetur adipisicing elit. Minus id ut tempora assumenda? Asperiores tenetur adipisci sed facere doloremque fuga tempore amet, commodi repellat? Repellat voluptate ducimus minima dolore. Aperiam." />
    </div>
    );  
};

export default Profile;

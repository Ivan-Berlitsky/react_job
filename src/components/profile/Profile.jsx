import React from 'react';
import Post from './Posts/Post';
import classes from './Profile.module.css';



const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.imgContain}>
        <img src='https://lh3.googleusercontent.com/proxy/YwtJzp6XbQjAVVKhIDwkVwp2sQVy1kAhYTRa6rrFhimPAJEtkExZ46ERo2hTCnt3askdPVnsb1iyf6Qj_QWjRSCqZWxL3gl3W-Fm36WmyADX8us20kV3Sbtt1djfPjHSc57Tm-U1V4Mk9ubCY9Fy' alt="image"/>
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

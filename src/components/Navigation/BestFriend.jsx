import React from 'react';

import classes from './BestFriend.module.css';

const BestFriend = (props) => {
    return(
        <div className={classes.bestFriends}>
            <div className={classes.friendItem}>
                <img className={classes.friendItemAvatar} src={props.state[0].src} alt="avatar"/>
                <div className={classes.friendName}>{props.state[0].name}</div>
            </div>

            <div className={classes.friendItem}>
                <img className={classes.friendItemAvatar} src={props.state[1].src} alt="avatar"/>
                <div className={classes.friendName}>{props.state[1].name}</div>
            </div>

            <div className={classes.friendItem}>
                <img className={classes.friendItemAvatar} src={props.state[2].src} alt="avatar"/>
                <div className={classes.friendName}>{props.state[2].name}</div>
            </div>
        </div>
    );
}

export default BestFriend;

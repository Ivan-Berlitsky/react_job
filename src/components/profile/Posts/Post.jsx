import React from 'react';
import Classes from './Post.module.css'


const Post = (props) => {

    return(
        props.dataPosts.map( (element) => {
            return(
                <li key={element.id}>
                    <div className={Classes.post}>
                        <div className={Classes.postAuthor}>
                            <img className={Classes.postAvatar} src={element.avatar} alt="avatar" />
                            <span className={Classes.postName}>
                                name - {element.name} 
                            </span>
                        </div>
                        <div className={Classes.postText}>
                            {element.text}
                            <div className={Classes.like}>
                                <button>
                                    <img src="data:image/png;base64,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" alt="like"/>
                                </button>
                                <span className={Classes.likeScore}>
                                    {element.score}
                                </span>
                            </div>
                        </div>
                    </div>   
                </li>
            );
        }) 
    );
}

export default Post;
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import PostItem from "./postItem";

const PostList = ({posts, title, remove}) => {

    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>No posts</h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Posts {title}</h1>
            <TransitionGroup>
                {posts.map((post, index) => 
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='post'
                    >
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>           
        </div>
    );
};

export default PostList;
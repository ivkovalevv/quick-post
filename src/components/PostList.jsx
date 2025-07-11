import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({posts, title, remove}) => {


    if(!posts.length){
        return (
            <h1 style={{textAlign: 'center'}}>
                No posts found!
            </h1>
        )
    }

    return (
        <div>
            <h1 className="posts-list-title">
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                    key={post.id}
                    /* nodeRef={nodeRef} */
                    timeout={500}
                    classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post} ></PostItem>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList
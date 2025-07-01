import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom"

const PostItem = (props) => {
  const router = useNavigate()

  return (
      <div className="post">
      <div className="post__content">
        <p className="post__title">{props.post.id}. {props.post.title}</p>
        <p className="post__description">
          {props.post.body}
        </p>
      </div>
      <div className="post__btns">
      <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
          &#187;
        </MyButton>
        <MyButton onClick={() => {props.remove(props.post)}}>
          ×
        </MyButton>
      </div>
    </div>
    )
}

export default PostItem
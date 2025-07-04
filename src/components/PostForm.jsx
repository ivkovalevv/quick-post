import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
    
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }

    return(
        <form>
        {/* Управляемый компонент */}
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Post title"
          class="modal-input">
        </MyInput>
        {/* Неуправляемый компонент */}
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="Post description"
          class="modal-input">
        </MyInput>
        <MyButton onClick={addNewPost}>Create a post</MyButton>
      </form>
    )
}

export default PostForm
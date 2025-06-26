import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";
import PostService from "../API/PostService"

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, ComError] = useFetching(async (id) => {
        const response = await PostService.getComments(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return(
        <div>
            <h1>Вы открыли страницу поста c ID {params.id}</h1>
            {isLoading
                ? <Loader></Loader>
                : <div>{post.id}. {post.title}</div>}
            <h2>Комментарии</h2>
            {isComLoading
                ? <Loader></Loader>
                : <div>
                    {comments.map(comm =>
                        <div style={{marginTop: 10}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                  </div>}
        </div>
    )
}

export default PostIdPage
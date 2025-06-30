import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";
import PostService from "../API/PostService"

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState({comments: []})
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

    console.log(comments.comments)


    return(
        <div className="page-wrapper">
            <h1>You have opened the page of the post with ID {params.id}</h1>
            {isLoading
                ? <Loader></Loader>
                : <div>{post.id}. {post.title}</div>}
            {comments.comments.length ? <h2>Comments</h2> : null}
            {isComLoading
                ? <Loader></Loader>
                : <div>
                    {comments.comments.map(comment =>
                        <div style={{marginTop: 10}}>
                            <div>{comment.body}</div>
                        </div>
                    )}
                  </div>}
        </div>
    )
}

export default PostIdPage
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
            <Link className="back__link" to="/posts">&#8592;</Link>
            <h1 className="small-description" style={{textAlign: "left"}}>You have opened the page of the post with ID {params.id}</h1>
            {isLoading
                ? <Loader></Loader>
                : <div>
                    <div className="post__title">{post.id}. {post.title}</div>
                    <div className="comments">
                        {comments.comments.length ? <h2 className="post__title">Comments:</h2> : <h2 className="post__title">There are no comments for this post.</h2>}
                        {comments.comments.map(comment =>
                            <div className="post__description comment" style={{marginTop: 10}}>
                                <div>{comment.body}</div>
                            </div>
                        )}
                    </div>
                </div>
            }   
        </div>
    )
}

export default PostIdPage
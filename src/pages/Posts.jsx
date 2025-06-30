import React, {useEffect, useMemo, useRef, useState } from "react";
import '../styles/App.css'
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import {getPageCount} from "../utils/pages"
import Pagination from "../components/UI/pagination/Pagination";

const defaultPosts = {
  posts: [
    {id: 1, title: 'Javascript', body: 'Its programmer language'},
    {id: 2, title: 'Node.js', body: 'I dont know what is it'},
    {id: 3, title: 'React', body: 'Its amazing features on JS! I am learning React right now!'}
  ],
}

function Posts() {
  const [posts, setPosts] = useState(defaultPosts)
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchePosts = usePosts(posts, filter.sort, filter.query)


  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) =>{
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  
  useEffect(() =>{
    fetchPosts(limit, page)
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    console.log(post)
    console.log(posts.posts.filter(p => p.id !== post.id))
    setPosts({posts: posts.posts.filter(p => p.id !== post.id)})
  }

  const changePage = (page) =>{
    setPage(page)
    fetchPosts(limit, page)
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}></PostForm>
      </MyModal>
      <hr style={{margin: '15px 0'}}></hr>
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      {postError && <h1>Произошла ошибка {postError}</h1>}
      {isPostsLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader></Loader></div>
      : <PostList remove={removePost} posts={sortedAndSearchePosts} title="Посты про JS"></PostList>}
      <Pagination 
        page={page} 
        changePage={changePage} 
        totalPages={totalPages}>
      </Pagination>
    </div>
  );
}

export default Posts;
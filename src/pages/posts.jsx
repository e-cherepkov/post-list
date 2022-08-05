import React, { useEffect, useMemo, useRef, useState } from "react";
import PostService from "../API/PostService";
import Pagination from "../components/pagination/pagination";
import PostFilter from "../components/postFilter";
import PostForm from "../components/postForm";
import PostList from "../components/postList";
import MyButton from "../components/UI/button/myButton";
import MyModal from "../components/UI/modal/myModal";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import '../styles/app.css';
import { getPageCount, getPagesArray } from "../utils/pages";

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const createPost  = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  const removePost  = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Add post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <hr style={{margin: '16px 0px'}}/>
      {postError &&
        <h1>Error - {postError}</h1>
      }
      {
        isPostsLoading
        ? <h1 style={{textAlign: 'center'}}>loading...</h1>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'testing'}/>
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default Posts;

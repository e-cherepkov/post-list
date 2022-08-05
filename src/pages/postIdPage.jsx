import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import useFetching from "../hooks/useFetching"

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  });

  const [fetchComments, isCommLoading, commError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id)
    setComments(response.data)
  });

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  return (
    <div className="App">
        <h1>Post page id_{params.id}</h1>
        {isLoading
          ? <p>Loading...</p>
          : <div><h3>{post.title}</h3> <div>{post.body}</div></div>
        }
        <h2>Comments</h2>
        {isCommLoading
          ? <p>Loading...</p>
          : <div>
            {comments.map(comm => 
              <div key={comm.id} style={{marginTop: '8px'}}>
                <span><b>{comm.email}</b></span>
                <p>{comm.body}</p>
              </div>
            )}
          </div>
        }
    </div>
  );
};

export default PostIdPage;

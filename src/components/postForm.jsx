import React, { useRef, useState } from "react";
import MyButton from "./UI/button/myButton";
import MyInput from "./UI/input/myInput";

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

    return (        
        <form>
            <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text" placeholder="Title post"/>
            <MyInput value={post.body} onChange={e => setPost({...post, body: e.target.value})} type="text" placeholder="Body post"/>
            <MyButton onClick={addNewPost}>Add post</MyButton>
        </form>        
    );
};

export default PostForm;
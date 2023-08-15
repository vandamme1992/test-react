import React, {useState} from 'react';
import style from "../App.css";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

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
        <form className={style.form}>
            <MyInput
                type='text'
                placeholder='назва посту'
                value={post.title}
                onChange={e=> setPost({...post, title: e.target.value})}
            />
            <MyInput
                value={post.body}
                placeholder='Опис поста'
                type='text'
                onChange={e=> setPost({...post, body: e.target.value})}
            />
            <MyButton

                onClick={addNewPost}
                props={'Add post'}>
                Add Post
            </MyButton>
        </form>

    );
};

export default PostForm;

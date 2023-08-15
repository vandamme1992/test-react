import React from 'react';
import style from './PostItem.module.css'
import MyButton from "../../UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (posts) => {
const route = useNavigate()


    return (
        <div className={style.PostItem}>
            <div className={style.content}>
                <strong>{ posts.post.id}.</strong>
                <h3>{posts.post.title}</h3>
                    <p>{posts.post.body}</p>
            </div>
            <div className={style.btn}>
                <MyButton onClick={()=>posts.remove(posts.post)}>Delete</MyButton>
                <MyButton onClick={()=> route(`/pages/${posts.post.id}`)}>Open Post</MyButton>
            </div>
        </div>
    );
};

export default PostItem;

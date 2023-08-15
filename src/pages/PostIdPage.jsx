import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostServise";
import style from './PostIdPage.module.css'
import {useFetching} from "../hooks/useFetching";
import Spinner from "../UI/Spinner/Spinner";
import Error from "./Error";


const PostIdPage = () => {
const params = useParams()
const [post, setPost] = useState({})
const [comments, setComments] = useState([])

const [fetchPostId, isLoading, error ] = useFetching(async ()=> {
    const response = await PostService.getById(params.id)
    setPost(response.data)
})


    const [fetchComment, loadingComment, errorComment ] = useFetching(async ()=> {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    })



    useEffect(() => {
fetchPostId()
        fetchComment()
    }, []);

    return (
        <div>
            {error && <Error/>}

            {isLoading && <Spinner/>}

            <div className={style.PostIdPage}>
                <strong>{ post.id}.</strong>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <h3>Comments</h3>

                {loadingComment && <Spinner/>}

               {comments.map((com)=> {
                return <div key={com.name}>
                   <h2>{com.name}</h2>
                   <div>{com.body}</div>
                   </div>
               })}
            </div>
        </div>
    );
};

export default PostIdPage;

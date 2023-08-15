import React, {useEffect, useRef, useState} from "react";
import PostList from "../components/PostList/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostServise";
import Spinner from "../UI/Spinner/Spinner";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import Pagination from "../UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../UI/select/MySelect";


function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(5)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

        // отримуемо останній елемент сторінки для підгрузки лоадера
    const lastElement = useRef()

    const [fetchPost, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })


    useObserver(lastElement, page < totalPages, isPostLoading, ()=> {
        setPage( page + 1)
    } )

    const createPost = (newPost) => {

        setPosts([...posts, newPost])
        setModal(false)
    }

    const changePage = (page) => {
        setPage(page)
    }


    useEffect(() => {
        fetchPost()
    }, [page, limit]);


    const deletePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))
    }


    return (
        <div className='App'>

            <MyButton onClick={() => setModal(true)}>
                Створити пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '20px 0'}}/>

            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError && <h1>Трапилася помилка ${postError}</h1>}

            <MySelect
                value={limit}
                onChange={(value)=> setLimit(value)}
                defaultValue='the number of elements on the page'
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                ]}
            />

            <PostList posts={sortedAndSearchedPosts}
                      remove={deletePost}/>

            <div ref={lastElement} style={{height: 20, background: 'lightgray'}}/>

            {isPostLoading && <Spinner/>}

            <Pagination
                page={page}
                totalPages={totalPages}
                changePage={changePage}/>
        </div>

    );
}

export default Posts;

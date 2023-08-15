import Home from "../pages/Header/Home";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";



export const privateRoutes = [
    {path: '/about', element: <About/>},
    {path: '/', element: <Home/>},
    {path: '/pages', element: <Posts/>},
    {path: '/pages/:id', element: <PostIdPage/>},
    {path: '*', element: <Error/>},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>},
    {path: '*', element: <Error/>},

]



// export const privateRoutes = [
//     {
//         path: '/',
//         element: <Home/>,
//         errorElement: <Error/>,
//     },
//     {
//         path: '/pages',
//         element: <Posts/>,
//         errorElement: <Error/>,
//     },
//     {
//         path: '/pages/:id',
//         element: <PostIdPage/>,
//         errorElement: <Error/>,
//     },
//     {
//         path: '/about',
//         element: <About/>,
//         errorElement: <Error/>,
//     },
//     {
//         path: '*',
//         element: <Error/>,
//         errorElement: <Error/>,
//     },
// ]
//
// export const publicRoutes = [
//     {
//         path: '/login',
//         element: <Login/>,
//         errorElement: <Error/>,
//     },
// ]

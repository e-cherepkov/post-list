import About from "./pages/about";
import Home from "./pages/home";
import Login from "./pages/login";
import Page404 from "./pages/page404";
import PostIdPage from "./pages/postIdPage";
import Posts from "./pages/posts";

export const privateRoutes = [
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true}
]

export const publicRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/', component: Home, exact: true},
    {path: '*', component: Login, exact: true},
    {path: '/login', component: Login, exact: true}
]
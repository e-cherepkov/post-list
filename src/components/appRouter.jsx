import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import About from "../pages/about";
import Home from "../pages/home";
import Page404 from "../pages/page404";
import PostIdPage from "../pages/postIdPage";
import Posts from "../pages/posts";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        isAuth
          ?
            <Routes>
              {privateRoutes.map(route => 
                <Route 
                  path={route.path} 
                  element={<route.component/>} 
                  exact={route.exact}
                />
              )} 
              {publicRoutes.map(route => 
                <Route 
                  path={route.path} 
                  element={<route.component/>} 
                  exact={route.exact}
                />
              )}          
            </Routes>
          :
            <Routes>
              {publicRoutes.map(route => 
                <Route 
                  path={route.path} 
                  element={<route.component/>} 
                  exact={route.exact}
                />
              )}
          </Routes>
    );
};

export default AppRouter;
import React, { useEffect, useMemo, useRef, useState } from "react";
import { BrowserRouter, Link, Route, Routes, Switch, Redirect} from "react-router-dom";
import AppRouter from "./components/appRouter";
import NavBar from "./components/UI/navBar/navBar";
import { AuthContext } from "./context";
import './styles/app.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <NavBar/>      
        <AppRouter/>        
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;

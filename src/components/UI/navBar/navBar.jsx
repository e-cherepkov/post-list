import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/myButton";

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navBar"> 
            <Link to='/' className="navBar-items">Main</Link>
            <Link to='/about' className="navBar-items">About</Link>
            <Link to='/posts' className="navBar-items">Posts</Link>
            <MyButton onClick={logout}>Logout</MyButton>
        </div>
    );
};

export default NavBar;
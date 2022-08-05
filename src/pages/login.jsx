import React, { useContext } from "react";
import MyInput from "../components/UI/input/myInput";
import MyButton from "../components/UI/button/myButton";
import { AuthContext } from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', true)
    }
  return (
    <div className="App">
        <h1>Login page</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder="login"/>
            <MyInput type="password" placeholder="password"/>
            <MyButton>Login</MyButton>
        </form>
    </div>
  );
};

export default Login;

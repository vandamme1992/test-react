import React, {useContext, useEffect, useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
const [inputLogin, setInputLogin] = useState('')
const [inputPassword, setInputPassword] = useState('')
    const navigate = useNavigate()



   const handlerLogin = () => {

    if(inputLogin.length >3 && inputPassword.length > 3) {
        localStorage.setItem('auth', 'auth')
        setIsAuth(true)
        navigate('/pages')
    } else {
        alert('введіть логін та пароль чотири (4) або більше символів')
    }


   }


    useEffect(()=> {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)

        }

    },[isAuth])

    return (
        <div >
            <h1>Login page</h1>
            <MyInput onChange={(e)=> setInputLogin(e.target.value)} type='text' placeholder='enter your login'/>
            <MyInput onChange={(e)=> setInputPassword(e.target.value)} type='password' placeholder='enter your password'/>
            <MyButton onClick={handlerLogin} >Enter</MyButton>
        </div>
    );
};

export default Login;

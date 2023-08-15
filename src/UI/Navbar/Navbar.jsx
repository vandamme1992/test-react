import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const LogOut = () => {
        setIsAuth(false)
        localStorage.clear()
    }

    return (
        <nav className='nav'>
            {isAuth && <MyButton onClick={ LogOut}>LogOut</MyButton>}
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/pages"}>Posts</Link>
        </nav>
    );
};

export default Navbar;

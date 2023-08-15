import './App.css'
import Navbar from "./UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import {useEffect, useState} from "react";
import { useNavigate} from "react-router-dom";

function App() {

    const navigate = useNavigate()
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        } else {
            navigate('/login')
        }
        setIsLoading(false)
    }, [isLoading, isAuth]);





    return (

        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading,
            setIsLoading,
        }}>
    <Navbar/>
        <AppRouter/>
        </AuthContext.Provider>

    )
}

export default App;

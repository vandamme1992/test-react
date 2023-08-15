import React, {useContext, useEffect, } from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/routes";
import {AuthContext} from "../context";
import Spinner from "../UI/Spinner/Spinner";

const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext)


    if(isLoading) {
        <Spinner/>
    }

    useEffect(() => {

    }, [isAuth]);

    return (
        <div>
            {
                isAuth ?
                    <Routes>
                        {privateRoutes.map(route =>
                            <Route
                                key={route.path}
                                element={route.element}
                                path={route.path}
                                exact={route.exact}
                            />
                        )}
                    </Routes>

            :
                    <Routes>
                        {publicRoutes.map(route =>
                            <Route
                                key={route.path}
                                element={route.element}
                                path={route.path}
                                exact={route.exact}
                            />
                        )}</Routes>
            }
        </div>
    );
};

export default AppRouter;

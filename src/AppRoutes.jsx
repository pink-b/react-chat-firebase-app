import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { LOGIN_ROUTE, CHAT_ROUTE } from './utils/consts';
import {useAuthState} from "react-firebase-hooks/auth"
import { Context } from '.';

const AppRoutes = () => {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth);

    // if (loading) {
    //     return <div>Загрузка...</div>;
    // }

    // if (error) {
    //     return <div>Ошибка: {error.message}</div>;
    // }

    return (
        <Routes>
            {user ? (
                <>
                    {privateRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
         
                </>
            ) : (
                <>
                    {publicRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                     <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
                </>
            )}
        </Routes>
    );
};

export default AppRoutes;
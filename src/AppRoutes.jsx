import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/consts';

const AppRoutes = () => {
    const user = false; // Здесь вы можете использовать состояние аутентификации

    return (
        <Routes>
            {user ? (
                <>
                    {privateRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    <Route path="/" element={<Navigate to={CHAT_ROUTE} />} />
                </>
            ) : (
                <>
                    {publicRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    <Route path="/" element={<Navigate to={LOGIN_ROUTE} />} />
                </>
            )}
        </Routes>
    );
};

export default AppRoutes;
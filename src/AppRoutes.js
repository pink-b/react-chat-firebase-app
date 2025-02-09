import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/consts';

const AppRoutes = () => {
    const user = true; // Здесь вы можете использовать состояние аутентификации

    return user ? (
        <Routes>
            {privateRoutes.map(({ path, Component }) => {
                console.log(path);
                console.log(Component);
                <Route key={path} path={path} element={<Component />} />
})}
            <Route path={CHAT_ROUTE} element={<Route to={CHAT_ROUTE} />} />
            {/* Если вы хотите перенаправить на CHAT_ROUTE, когда пользователь аутентифицирован */}
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path={LOGIN_ROUTE} element={<Route to={LOGIN_ROUTE} />} />
            {/* Если вы хотите перенаправить на LOGIN_ROUTE, когда пользователь не аутентифицирован */}
        </Routes>
    );
};

export default AppRoutes;
import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { LOGIN_ROUTE, CHAT_ROUTE } from './utils/consts';
import {useAuthState} from "react-firebase-hooks/auth"
import { Context } from '.';

const AppRoutes = () => {
    const {auth} = useContext(Context)
    let [user, loading, error] = useAuthState(auth); // Здесь вы можете использовать состояние аутентификации
    if (loading) {
        console.log("is Loading");
        
        return <div>Loading...</div>; // или любой другой индикатор загрузки
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>;
      }
    
    console.log(user);
    console.log(privateRoutes);
    console.log(publicRoutes);
    user = true
    
    

    return (
        <Routes>
            {user ? (
                <>
                    {privateRoutes.map(({ path, Component }) => {
                        console.log(path);
                        console.log(Component);
                        
                        
                        <Route key={path} path={path} element={<Component />} />
})}
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
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Импортируем BrowserRouter
import App from './App';

// Импортируйте функции, которые вам нужны из SDK, которые вы хотите использовать
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Конфигурация вашего веб-приложения Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCBACUz0ULp55qX_pEzWojWAl9K5p4AfjE",
  authDomain: "chat-react-87813.firebaseapp.com",
  projectId: "chat-react-87813",
  storageBucket: "chat-react-87813.firebasestorage.app",
  messagingSenderId: "603636947246",
  appId: "1:603636947246:web:b68768d5e7d7e2eb9f42bf"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const Context = createContext(null)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Context.Provider value={{
    app,
    auth,
    db
  }}>
  
      <App />
  </Context.Provider>
  </React.StrictMode>
);

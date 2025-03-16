
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRoutes from './AppRoutes';
import Loader from './components/Loader';
import { useContext } from 'react';
import {useAuthState} from "react-firebase-hooks/auth"
import { Context } from '.';

function App() {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if( loading ) {
    return <Loader/>
  }
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
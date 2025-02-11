
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRoutes from './AppRoutes';

function App() {
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
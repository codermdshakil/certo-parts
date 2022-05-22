import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navber from './Shared/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFoundPage from './Shared/NotFoundPage';

function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

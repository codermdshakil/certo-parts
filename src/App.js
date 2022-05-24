import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navber from './Shared/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFoundPage from './Shared/NotFoundPage';
import Footer from './Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import SignUp from './Pages/SignUp/SignUp';
import Order from './Pages/Order/Order';
import RequireAuth from './Shared/RequireAuth';


function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='Order/:productId' element={
          <RequireAuth>
            <Order />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/resetpassword' element={<ResetPassword />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div >
  );
}

export default App;

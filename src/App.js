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
import Deshboard from './Pages/Deshboard/Deshboard';
import MyOrders from './Pages/Deshboard/MyOrders';
import AddReview from './Pages/Deshboard/AddReview';
import MyProfile from './Pages/Deshboard/MyProfile';
import MakeAdmin from './Pages/Deshboard/MakeAdmin';
import Blogs from './Pages/Blogs/Blogs';
import MyProtfolio from './Pages/MyProtfolio/MyProtfolio';
import AddProduct from './Pages/Deshboard/AddProduct';
import ManageProducts from './Pages/Deshboard/ManageProducts';
import ManageAllOrders from './Pages/Deshboard/ManageAllOrders';
import Payment from './Pages/Deshboard/Payment';



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
        <Route path='/deshboard' element={<RequireAuth> <Deshboard /></RequireAuth>}>
          <Route index element={<MyProfile />}></Route>
          <Route path='myorders' element={<RequireAuth> <MyOrders /></RequireAuth>}></Route>
          <Route path='addreview' element={<RequireAuth><AddReview /></RequireAuth>}></Route>
          <Route path='makeadmin' element={<RequireAuth> <MakeAdmin /></RequireAuth>}></Route>
          <Route path='addproduct' element={<RequireAuth><AddProduct /></RequireAuth>}></Route>
          <Route path='manageproduct' element={<RequireAuth><ManageProducts /></RequireAuth>}></Route>
          <Route path='manageorders' element={<RequireAuth><ManageAllOrders /></RequireAuth>}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
        </Route>
        <Route path='blogs' element={<Blogs />}></Route>
        <Route path='myprotfolio' element={<MyProtfolio />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div >
  );
}

export default App;

import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Navbar from '../user/components/Navbar/Navbar';
import HomePage from '../user/pages/HomePage';
import LoginPage from '../user/pages/LoginPage';
import SignUpPage from '../user/pages/SignUpPage';
import ProductPage from '../user/pages/ProductPage';
import AboutUsPage from '../user/pages/AboutUsPage';
import ContactUsPage from '../user/pages/ContactUsPage';
import ProductDetails from '../user/components/ProductDetails/ProductDetails';
import CartPage from '../user/pages/CartPage';
import CheckOut from '../user/components/CheckOut.jsx/CheckOut';
import Footer from '../user/components/Footer/Footer';
import OrderDetails from "../user/components/Order/OrderDetails"
import PaymentSuccess from '../user/components/Payment/PaymentSuccess';
import  {NavbarDefault} from '../user/components/Navbar/Navbar';
import MyOrdersPage from '../user/pages/MyOrdersPage';
import RateAndReview from '../user/components/RateAndReview/RateAndReview';
import { MenuProvider } from '../user/components/ContextProvider/MenuContext';
import DeptAndSearch from '../user/components/DepartmentAndSearch/DeptAndSearch';
import Gallery from '../user/components/Gallery/Gallery';
import ForgotPassword from '../user/components/ForgotPassword/ForgotPassword';
import OTPVerification from '../user/components/ForgotPassword/OTPVerification';
import ResetPassword from '../user/components/ForgotPassword/ResetPassword';




const CustomerRoutes = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <MenuProvider>
    <NavbarDefault isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  
      
    
    
    <Routes>

    <Route path="/"  element={<HomePage/>}></Route>
      <Route path="/signin" element = {<LoginPage  setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/signup" element = {<SignUpPage  setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/products" element={<ProductPage/>}></Route>
      <Route path="/about-us" element={<AboutUsPage/>}></Route>
      <Route path="/contact-us" element={<ContactUsPage/>}></Route>
      <Route path="/products/id/:productId" element={<ProductDetails/>} />
      <Route path="/cart" element={<CartPage/>}></Route>
      <Route path="/checkout" element={<CheckOut/>}></Route> 
      <Route path="/account/order" element={<MyOrdersPage/>}></Route>
      <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>
      <Route path="/payment/:orderId" element={<PaymentSuccess/>}></Route>
      <Route path="/account/rate/:productId" element={<RateAndReview />}></Route>
      <Route path="/gallery" element={<Gallery/>}></Route>
      <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
      {/* <Route path="/otpVerification/email/:emailId" element={<OTPVerification/>}></Route> */}
      <Route path="/otpVerification/email/:emailId" element={<OTPVerification/>}></Route>
      <Route path="/resetPassword/email/:emailId" element={<ResetPassword/>}></Route>





    </Routes>
    </MenuProvider>
    <Footer/>
    </>
  )
}

export default CustomerRoutes
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUser, logout } from '../../redux/Auth/Action';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCart } from "../../redux/Cart/Action";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

export function NavbarDefault() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const { cart } = useSelector((store) => store);
  console.log(cart)

  

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };


  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      dispatch(getCart(jwt));
    }
  }, [jwt, auth.jwt]);

  useEffect(() => {
    if (location.pathname === '/signup' || location.pathname === '/signinn') {
      navigate(-1);
    }
  }, [auth.user]);

  const handleLogout = () => {
    // Implement your logout logic here
    logout(dispatch)
    navigate("/")
  };

  const handleMyOrderClick = () => {
    handleCloseUserMenu()
    navigate("/account/order")
  }

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  console.log(cart.cartItems.length)
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-[#e63946]" : "")}>Home</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <NavLink to="/products" className={({ isActive }) => (isActive ? "text-[#e63946]" : "")}>
          All Products
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <NavLink to="/gallery" className={({ isActive }) => (isActive ? "text-[#e63946]" : "")}>Gallery</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <NavLink to="/about-us" className={({ isActive }) => (isActive ? "text-[#e63946]" : "")}>About Us</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "text-[#e63946]" : "")}>Contact Us</NavLink>
      </Typography>
    </ul>
  );
 
  return (
    <div className="mx-auto max-w-screen-xl px-4  lg:px-8  ">
      <div className="container mx-auto flex items-center justify-between ">
        <Link to='/'>
        <Typography
          
          className=" cursor-pointer  font-medium -ml-7 md:-ml-0"
        >
          <img src="https://res.cloudinary.com/dkhsnhjrh/image/upload/v1708707479/2_igcdbk.png" className="sm:w-36 sm:h-36 w-28 h-28  "/>
        </Typography>
        </Link>
        
        <div className="hidden  lg:block">{navList}</div>
        <div className="flex items-center gap-x-5">
          {/* <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Sign in</span>
          </Button> */}
          {!auth.user ? (
          <Link to="/signup">
            <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Sign Up</span>
          </Button>
          </Link>
        ) : (
          <div className=" lg:block hidden">
            <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        // onClick={handleUserClick}
                        sx={{
                         bgcolor: "#1d3557", 
                          color: "white",
                          cursor: "pointer",
                          fontSize: "0.95rem",
                          
                        }}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
                      {/* <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleUserClick}
                      >
                        Dashboard
                      </Button> */}
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <Link to='/cart'>
                        <MenuItem onClick={handleCloseUserMenu}>
                          Cart
                        </MenuItem>
                        </Link>
                       
                        
                        <MenuItem onClick={handleMyOrderClick}>
                          My Orders
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
          </div>
          
        )}
        {auth.user && (
          <Link to="/cart">
         
          <Button
          variant="gradient"
          size="sm"
          className="hidden relative  lg:inline-block"
        >
          <span> <PiShoppingCartSimpleLight className=" text-2xl  text-secondary-dark-color" />
            <p className=" absolute -right-3 -top-3 bg-primarycolor p-2 text-[#fff] rounded-full"> {cart.cartItems.length}</p>
          </span>
        </Button>
        </Link>
        )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit mb-5 sm:mb-0 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-4 md:gap-x-1">
            {/* <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button> */}
            {!auth.user ? (
          <Link to="/signup">
            <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
              Sign up
            </button>
          </Link>
        ) : (
          <div >
            <Avatar
                        className="text-white "
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        // onClick={handleUserClick}
                        sx={{
                         
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
                    
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                         <Link to='/cart'>
                        <MenuItem onClick={handleCloseUserMenu}>
                          Cart
                        </MenuItem>
                        </Link>
                        
                        <MenuItem onClick={handleMyOrderClick}>
                          My Orders
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
          </div>
          
        )}
        {auth.user && (
          <Link to='/cart'>
          
          <button className='bg-richblack-800 relative py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
            <PiShoppingCartSimpleLight className=" text-2xl text-secondary-dark-color" />
            <div className=" z-20 absolute -right-3 -top-3 bg-primarycolor p-2 text-[#fff] rounded-full"> {cart.cartItems.length}</div>
          </button>
          
          </Link>
        )}
          </div>
        </div>
      </Collapse>
    </div>
  );
}
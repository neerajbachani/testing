import React, { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUser, register } from '../../redux/Auth/Action';
import LoadingBar from 'react-top-loading-bar';

const SignUpForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  function changeHandler(event) {
    setUserData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event) {
    try {
      event.preventDefault();
      if (userData.password !== userData.confirmPassword) {
     
        return;
      }

      // Show loading bar
      setProgress(100);

      dispatch(register(userData, () => {
        setProgress(0); // Reset progress after register action is completed
        setIsLoggedIn(true);
        const accountData = { ...userData };
        console.log("printing account data ");
        console.log(accountData);
        navigate(-1);
      }));
    } catch (error) {
      console.error('Submit handler error:', error);
      setProgress(0); // Reset progress if an error occurs
    }
  }

  return (
    <div>
      <LoadingBar color="#f11946" progress={progress} />
      <form onSubmit={submitHandler}>
        {/* first name and lastName */}
        <div className=' my-3 flex flex-col gap-5'>
          <label>
            <p className=' font-poppins text-3xl'>First Name<sup>*</sup></p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={userData.firstName}
              className='border border-light-bg-color w-60 pl-2 py-3 rounded-2xl text-xl'
            />
          </label>

          <label>
            <p className=' font-poppins text-3xl'>Last Name<sup>*</sup></p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={userData.lastName}
              className='border border-light-bg-color w-60 pl-2 py-3 rounded-2xl text-xl'
            />
          </label>
        </div>
        {/* email Add */}
        <label>
          <p className=' font-poppins text-3xl '>Email Address<sup>*</sup></p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address "
            value={userData.email}
            className='border border-light-bg-color w-60 pl-2 py-3 rounded-2xl text-xl'
          />
        </label>

        {/* createPassword and Confirm Password */}
        <div className='flex flex-col gap-5 mt-5'>
          <div className='relative'>
            <label>
              <p className='font-poppins text-3xl'>Create Password<sup>*</sup></p>
              <input
                required
                type={showPassword1 ? ('text') : ('password')}
                name='password'
                onChange={changeHandler}
                placeholder='Enter Password'
                value={userData.password}
                className='border border-light-bg-color w-60 pl-2 py-3 rounded-2xl text-xl'
              />
              <span className='eye-icon absolute bottom-5 text-2xl ml-5 ' onClick={() => setShowPassword1((prev) => !prev)}>
                {showPassword1 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </label>
          </div>

          <div className='relative'>
            <label>
              <p className='font-poppins text-3xl'>Confirm Password<sup>*</sup></p>
              <input
                required
                type={showPassword2 ? ('text') : ('password')}
                name='confirmPassword'
                onChange={changeHandler}
                placeholder='Confirm Password'
                value={userData.confirmPassword}
                className='border border-light-bg-color w-60 pl-2 py-3 rounded-2xl text-xl'
              />
              <span className='eye-icon absolute bottom-5 text-2xl ml-5' onClick={() => setShowPassword2((prev) => !prev)}>
                {showPassword2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </label>
          </div>
        </div>
        <button className=' mt-10 rounded-2xl text-whitecolor bg-secondary-dark-color hover:bg-primarycolor transition-all transition-500ms font-poppins text-3xl px-7 py-3 w-full '>
          Create Account
        </button>
      </form>
      <Link className='  text-xl text-secondary-dark-color' to='/signin'>Already have and Account? <span>Login</span></Link>
    </div>
  );
};

export default SignUpForm;
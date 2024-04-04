import React from 'react'



import SignupForm from './SignUpForm'
import LoginForm from './LoginForm'



const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

    // console.log("ye rha mera form type");
    // console.log(formtype)
  return (
    <div className='flex justify-between  w-11/12 max-w-[110rem] py-12 mx-auto gap-x-12 gap-y-0 border border-light-bg-color '>

        <div className=' md:max-w-[450px] max-w-screen-lg  md:mx-0' >
            <h1
            className='text-richblack-5 font-semibold text-secondary-dark-color  text-5xl leading-[2.375rem]' 
            >
                {title}
            </h1>

            <p className='text-3xl leading[1.625rem] mt-4' >
                <span className=' text-secondary-dark-color'>{desc1}</span>
                <br/>
                <span className=' text-[#FBC2B5] italic'>{desc2}</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            {/* <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div> */}

            {/* <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button> */}

        </div>

        <div className='relative md:w-11/12 md:max-w-[450px] w-0 '>
            {/* <img src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"/> */}

            <img src={image}
                alt="resin"
                width={658}
                // height={990}
                loading="lazy"
                className='absolute -top-4 right-4 object-cover h-full hidden md:block'
                />    
        </div>

    </div>
  )
}

export default Template
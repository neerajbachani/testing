import React from 'react'
// import './btn.css'
import { Link, useNavigate } from 'react-router-dom';

const RawMaterials = () => {
    const navigate = useNavigate()
    const handleButton = () => {
            navigate('/products?resinRawMaterials=rawcollections')
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };
  return (
    <>
    <div className=' mt-[5rem]'>
        <h1 className='md:text-4xl text-3xl  text-secondary-dark-color text-left font-bold md:ml-[3rem] ml-[1rem] font-poppins ' >Explore Raw Materials</h1>
        <div className=' flex flex-col md:flex-row max-w-screen-lg  mx-auto gap-10 items-center mt-5 '>
            <div className=' relative'>
                <Link to='/products/id/65f5d9f0aa0a3ef296f6a3c6'>
                <img src='https://res.cloudinary.com/dkhsnhjrh/image/upload/v1709553018/trinketMould_hqdocr.jpg' className=' md:w-[30rem] md:h-[30rem] w-[22rem] h-[22rem] m-5 md:m-0'/>
                </Link>
                
                <div className=' absolute bg-blue-primary bg-opacity-70 bottom-0 left-0 right-0 p-2 m-5 md:m-0  '>
                <h3 className='  text-3xl text-secondary-dark-color font-poppins z-10 '>8" Oval Trinklet Mould </h3>
                <p className=' text-2xl text-primarycolor font-bold '>₹299 <span className=' ml-5 text-xl line-through font-normal
           text-[#7a7575]      '>₹349</span></p>
                </div>
                
            </div>
            <div className='m-1 md:m-0 flex flex-col md:gap-5 gap-3'>
                <div className=' flex md:gap-7 gap-4 '>
                    <div className='relative'>
                        <Link to='/products/id/65f5daaaaa0a3ef296f6a3d4'>
                        <img className=" w-[15rem] h-[15rem] object-cover " src='https://res.cloudinary.com/dkhsnhjrh/image/upload/v1709553016/KeychainsJewelleryMould_wdb8mo.jpg'/>
                        </Link>
                   
                    <div className=' absolute bg-blue-primary bg-opacity-70 bottom-0 left-0 right-0 p-1 '>
                <h3 className='  text-xl text-secondary-dark-color font-poppins z-10 '>Keychain / Jewellery Mould </h3>
                <p className=' text-lg text-primarycolor font-bold '>₹299 <span className=' ml-5 text-md line-through font-normal
           text-[#7a7575]      '>₹349</span></p>
                </div>

                    </div>
                    <div className=' relative'>
                        <Link to='/products/id/65f5db26aa0a3ef296f6a3e2'>
                        <img src='https://res.cloudinary.com/dkhsnhjrh/image/upload/v1709553267/SplitHeartMould_k4115z.jpg' className='w-[15rem] h-[15rem] object-cover'/>
                        </Link>
                    
                    <div className=' absolute bg-blue-primary bg-opacity-70 bottom-0 left-0 right-0 p-1 '>
                <h3 className='  text-xl text-secondary-dark-color font-poppins z-10 '>Split Heart Pendant Mould </h3>
                <p className=' text-lg text-primarycolor font-bold '>₹299 <span className=' ml-5 text-md line-through font-normal
           text-[#7a7575]      '>₹349</span></p>
                </div>
                    </div>
                    
                </div>
                <div className=' flex md:gap-7 gap-4  '>
                    <div className='relative'>
                        <Link to='/products/id/65f5dc30aa0a3ef296f6a3fa'>
                        <img className=" w-[15rem] h-[15rem] object-cover " src='https://res.cloudinary.com/dkhsnhjrh/image/upload/v1709553270/PendantMouldSet_wjhy0h.jpg'/>
                        </Link>
                    
                    <div className=' absolute bg-blue-primary bg-opacity-70 bottom-0 left-0 right-0 p-1 '>
                <h3 className='  text-xl text-secondary-dark-color font-poppins z-10 '>5 Pendant Mould Set</h3>
                <p className=' text-lg text-primarycolor font-bold '>₹299 <span className=' ml-5 text-md line-through font-normal
           text-[#7a7575]      '>₹349</span></p>
                </div>

                    </div>
                    <div className=' relative'>
                        <Link to='/products/id/65f5df79aa0a3ef296f6a428'>
                        <img src='https://res.cloudinary.com/dkhsnhjrh/image/upload/v1709567819/JwelleryMould_gxkfzk.jpg' className='  w-[15rem] h-[15rem] object-cover'/>
                        </Link>
                    
                    <div className=' absolute bg-blue-primary bg-opacity-70 bottom-0 left-0 right-0 p-1 '>
                <h3 className='  text-xl text-secondary-dark-color font-poppins z-10 '>Jewellery Mould </h3>
                <p className=' text-lg text-primarycolor font-bold '>₹299 <span className=' ml-5 text-md line-through font-normal
           text-[#7a7575]      '>₹349</span></p>
                </div>
                    </div>
                    
                </div>
               
                
            </div>
        </div>
        <button className='btn ' onClick={handleButton} >
            View All →
        </button>
    </div>
    </>
  )
}

export default RawMaterials
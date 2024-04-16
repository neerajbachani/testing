import React, { useState, useEffect } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { getHeroSection } from '../../redux/HeroSection/Action';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import LoadingBar from 'react-top-loading-bar';

// const HeroSection = ({ isOpen }) => {
//   const dispatch = useDispatch();
//   const { heroSection } = useSelector((store) => store);
//   const [progress, setProgress] = useState(0);
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     setProgress(50); // Set loading progress to 50%
//     dispatch(getHeroSection())
//       .then(() => {
//         setProgress(100); // Set loading progress to 100%
//         setTimeout(() => {
//           setProgress(0); // Reset loading progress after a short delay
//         }, 500);
//       })
//       .catch(() => {
//         setProgress(0); // Reset loading progress if there's an error
//       });
//   }, [dispatch]);

//   const widthClass = isOpen ? 'sm:max-w-[70vw] 2xl:max-w-[75vw] w-full mx-auto sm:ml-[15rem] md:ml-[22rem] -z-10 transition-all duration-500' : ' w-full md:mx-0 md:px-4 transition-all duration-500 ml-[0rem]';
//   const widthClas = isOpen ? 'mx-0' : 'md:mx-4';

//   const nextImage = () => {
//     setCurrentImage((currentImage + 1) % heroSection.heroSections.length);
//     console.log("hu")
//   };

//   const prevImage = () => {
//     setCurrentImage((currentImage - 1 + heroSection.heroSections.length) % heroSection.heroSections.length);
//   };

//   return (
//     <>
//       <LoadingBar
//         color="#e63946"
//         progress={progress}
//         onLoaderFinished={() => setProgress(0)}
//       />
//       <div className={`${widthClass} relative md:mt-[1rem] mt-[0rem] `}>
//         <div>
//           {heroSection.heroSections.length > 0 && heroSection.heroSections[currentImage] ? (
//             <>
//               <img
//                 src={heroSection.heroSections[currentImage].image}
//                 alt="Carousel Image"
//                 className={`relative w-[100%] min-h-[80vh] opacity-80 object-cover`}
//               />
//             </>
//           ) : (
//             <Skeleton variant="rectangular" sx={{ minHeight: '80vh', width: '100%' }} />
//           )}

//           <div className='absolute z-10 top-[40%]'>
//             <div className=' flex justify-between items-center'>
//               <button
//                 className=" text-xl  md:text-4xl text-secondary-dark-color text-white px-10 py-1 rounded"
//                 onClick={prevImage}
//               >
//                 <IoIosArrowDropleftCircle />
//               </button>
//               <div className=' flex flex-col '>
//                 <h1 className=' lg:text-4xl  text-2xl font-poppins font-semibold text-secondary-dark-color '>
//                   {heroSection.heroSections.length > 0 && heroSection.heroSections[currentImage].title}
//                 </h1>
//                 <Link to={heroSection.heroSections.length > 0 && heroSection.heroSections[currentImage].link} className=" mt-10  relative inline-flex items-center justify-center  md:py-7 py-2  overflow-hidden font-medium font-poppins text-indigo-600 transition duration-300 ease-out rounded-full shadow-sm bg-primarycolor  group md:w-[15rem] w-[8rem]">
//                   <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[#fff] duration-300 -translate-x-full bg-primarycolor group-hover:translate-x-0 ease">
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
//                   </span>
//                   <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease md:text-4xl text-2xl  text-[white]">View All</span>
//                   <span className="relative invisible">View All</span>
//                 </Link>
//               </div>
//               <button
//                 className=" text-xl md:text-4xl text-secondary-dark-color px-10 py-1 rounded "
//                 onClick={nextImage}
//               >
//                 <IoIosArrowDroprightCircle />
//               </button>
//             </div>
//           </div>

//           <div className={`${widthClas} absolute  top-0 bottom-0 left-0 right-0 bg-opacity-80 opacity-40`} style={{
//             background: "rgb(224,235,255)",
//             background: "linear-gradient(90deg, rgba(224,235,255,1) 0%, rgba(107,154,240,1) 100%)",
//           }}></div>
//         </div>
//       </div>
  
//     </>
//   );
// };
const HeroSection = ({ isOpen }) => {
  const dispatch = useDispatch();
  const { heroSection } = useSelector((store) => store);
  const [progress, setProgress] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProgress(50);
    dispatch(getHeroSection())
      .then(() => {
        setProgress(100);
        setLoading(false);
        setTimeout(() => {
          setProgress(0);
        }, 500);
      })
      .catch(() => {
        setProgress(0);
        setLoading(false);
      });
  }, [dispatch]);

  const widthClass = isOpen
    ? 'sm:max-w-[70vw] 2xl:max-w-[75vw] w-full mx-auto sm:ml-[15rem] md:ml-[22rem] transition-all duration-500'
    : 'w-full md:mx-0 md:px-4 transition-all duration-500 ml-[0rem] mt-[2rem]';
  const widthClas = isOpen ? 'mx-0' : 'md:mx-4';

  const items = [
    <div key={currentImage} className="item">
      {loading ? (
        <Skeleton variant="rectangular" sx={{ minHeight: '80vh', width: '100%' }} />
      ) : (
        <>
          <Link to={heroSection.heroSections[currentImage].link}>
            <img
              className="bg-no-repeat"
              src={heroSection.heroSections[currentImage].image}
              alt={heroSection.heroSections[currentImage].title}
            />
          </Link>
        </>
      )}
    </div>
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % heroSection.heroSections.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + heroSection.heroSections.length) % heroSection.heroSections.length);
  };

  return (
    <>
      <LoadingBar
        color="#e63946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className={`${widthClass} relative md:mt-[1rem] mt-[0rem] `}>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite
          autoPlay
          autoPlayInterval={2000}
          disableButtonsControls
          disableDotsControls
          onSlideChanged= {nextImage}
        />
      </div>
    </>
  );
};

export default HeroSection;




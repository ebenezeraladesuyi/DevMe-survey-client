import React, {useEffect, useState} from 'react'

import { NavLink } from "react-router-dom";
import {motion}  from "framer-motion";

const SurveyHome: React.FC = () => {

     // Define an array of background image URLs
  const backgroundImageUrls = [
    'url("/images/hero3.jpg")',
    'url("/images/hero2.jpg")',
    'url("/images/hero1.jpg")',
  ];

  // State to manage the index of the current background image
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  // Function to handle changing the background image
  const changeBackground = () => {
    setCurrentBackgroundIndex(prevIndex => (prevIndex + 1) % backgroundImageUrls.length);
  };

  useEffect(() => {
    // Automatically change background every 2 seconds
    const intervalId = setInterval(changeBackground, 3000);

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run the effect only once on component mount



  return (
    <motion.div className="w-full min-h-[100vh] flex justify-center items-center relative bg-cover bg-center"

      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}

    style={{
        backgroundImage: backgroundImageUrls[currentBackgroundIndex],
        transition: 'background-image 2s ease',
      }}
    >
        <div className="absolute bg-black h-full w-full top-0 left-0 opacity-60 "></div>

        <div className="w-[90%] md:w-[60%] lg:w-[40% mt-[50px] md:mt-[30px flex flex-col gap-3 lg:gap-4 items-center z-20 text-white">
            <motion.p className="text-[20px] md:text-[33px] lg:text-[40px] text-center bg-[#982293] p-2 px-4 text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
            >DevMe Market Validation Survey</motion.p>

            <motion.p className="lg:text-[22px] text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                At DevMe, we are dedicated to holistically developing teenagers for a complex and fast-paced world like ours today. Our solution goes beyond being just a digital marketplace for courses.
            </motion.p>

            <motion.p className="lg:text-[22px] text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
            >
                We offer an hybrid experience with an unlearning-to-learn approach. It starts with a 6–10 weeks comprehensive readiness program, followed by a seamless transition to our digitalized growth ecosystem, designed to encourage continual learning, peer networking, assessments , career guidance, and emotional support, automatic resume building and real time growth tracking . Kindly fill the survey better so we can serve you and your wards better.
            </motion.p>

            <NavLink to="/survey">
                <motion.button className="bg-[#982293] text-white p-2 md:text-[17px] lg:text-[20px] px-6 rounded-[30px] animate-pulse border-none outline-none"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.9 }}
            >
                    Start Survey
                </motion.button>
            </NavLink>
        </div>
    </motion.div>
  )
}

export default SurveyHome
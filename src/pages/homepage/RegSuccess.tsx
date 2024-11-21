// import React from 'react'

import { IoCheckmarkDoneCircle } from "react-icons/io5";

const RegSuccess = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-center bg-cover bg-[#982293]">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] flex flex-col justify-center items-center gap-4 lg:gap-7">
            <div className="text-[150px] lg:text-[200px] text-white">
                <IoCheckmarkDoneCircle />
            </div>

            <div className=" text-white text-center text-[13px] md:text-[16px] lg:text-[20px]">
                Thank you for taking this survey. We look forward to having a great experience with you.
            </div>

            <a href="https://www.thedevme.org/" className="p-2 bg-[#fff] text-[#982293] px-5 rounded-[30px] hover:bg-[#3e4095] border-none  transition-all duration-500 ease-in-out animate-pulse">
                Checkout Our Website
            </a>
        </div>
    </div>
  )
}

export default RegSuccess
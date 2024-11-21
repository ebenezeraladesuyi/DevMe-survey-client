// import React from 'react'

import { NavLink } from "react-router-dom"

const SurveyHome = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
        <div className="w-[90%] md:w-[60%] lg:w-[40%] mt-[20px] md:mt-[30px flex flex-col gap-3 lg:gap-4 items-center">
            <p className="lg:text-[22px] text-center">
                At DevMe, we are dedicated to holistically developing teenagers for a complex and fast-paced world like ours today. Our solution goes beyond being just a digital marketplace for courses.
            </p>

            <p className="lg:text-[22px] text-center">
                We offer an hybrid experience with an unlearning-to-learn approach. It starts with a 6–10 weeks comprehensive readiness program, followed by a seamless transition to our digitalized growth ecosystem, designed to encourage continual learning, peer networking, assessments , career guidance, and emotional support, automatic resume building and real time growth tracking . Kindly fill the survey better so we can serve you and your wards better.
            </p>

            <NavLink to="/survey">
                <button className="bg-[#982293] text-white p-2 md:text-[17px] lg:text-[20px] px-6 rounded-[30px] animate-pulse border-none outline-none">
                    Start Survey
                </button>
            </NavLink>
        </div>
    </div>
  )
}

export default SurveyHome
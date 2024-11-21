// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../components"

const SurveyLayout = () => {
  return (
    <div className="font-pop">
        <Header />
        <Outlet />
    </div>
  )
}

export default SurveyLayout
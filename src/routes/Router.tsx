import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import SurveyLayout from "../layout/SurveyLayout";


const SurveyHome = lazy(() => import("../pages/homepage/SurveyHome"))
const Survey = lazy(() => import("../pages/homepage/Surveys"))
const RegSuccess = lazy(() => import("../pages/homepage/RegSuccess"))


export const element = createBrowserRouter([
    {
        path: "/",
        element: <SurveyLayout />,
        children: [
            {
                index: true,
                element: <SurveyHome />
            },
            {
                path: "survey",
                element: <Survey />
            },
            {
                path: "success",
                element: <RegSuccess />
            }
        ]
    }
])

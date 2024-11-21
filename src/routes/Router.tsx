import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import SurveyLayout from "../layout/SurveyLayout";
// import Survey from "../pages/homepage/Surveys";
// import SurveyHome from "../pages/homepage/SurveyHome";


const SurveyHome = lazy(() => import("../pages/homepage/SurveyHome"))
const Survey = lazy(() => import("../pages/homepage/Surveys"))


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
            }
        ]
    }
])

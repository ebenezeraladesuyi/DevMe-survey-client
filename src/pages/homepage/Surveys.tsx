import React, { useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Questions from "./Questions";
import { SurveyResponse, User } from "../../types/Interface";
import { DatasIsaLoading } from "../isLoading/DataIsLoading";
import { useNavigate } from "react-router-dom";

const Surveys: React.FC = () => {
    const { handleSubmit, control, setValue } = useForm();
    const [page, setPage] = useState(0);
    const [user, setUser] = useState<User>({ name: "", email: "", phone: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const onSubmit = async (data: any) => {
      const responses = Object.entries(data).map(([questionId, answer]) => ({
        questionId,
        answer: Array.isArray(answer) ? answer : [answer], // Ensure all answers are arrays
      }));

      const surveyData: SurveyResponse = { user, responses };
        setLoading(true)
      try {
        const response = await axios.post("https://devme-survey-server.onrender.com/survey/submit", surveyData, 
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
        );

        console.log(response.data);

        toast.success("Survey submitted successfully!");

        navigate("/success")

      } catch (error: any) {
        toast.error(`Submission failed: ${error.response?.data?.message || "Something went wrong."}`);
      } finally {
            setLoading(false)
    }
    };

    const currentQuestions = Questions.slice(page * 5, page * 5 + 5);



    return (<div className="w-full min-h-[100vh] flex justify-center items-center">
      <div className="w-[90%] md:w-[60%] lg:w-[40%] flex flex-col gap-3 items-center justify-center mt-[100px] md:mt-[120px]">
        <h1 className="text-[20px] md:text-[25px] text-white p-2 px-4 rounded-md bg-[#982293]">Survey Form</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-2 ">
          {/* Dynamic user information section */}
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex-col flex gap-1">
              <label className="md:text-[20px]">Name:</label>
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className=" border-[1px] border-[#982293] h-[40px] md:h-[50px] w-full p-2 rounded-[30px] pl-3 outline-none text-[14px]"
                required
              />
            </div>
            <div className="w-full flex-col flex gap-1">
              <label className="md:text-[20px]">Email:</label>
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className=" border-[1px] border-[#982293] h-[40px] md:h-[50px] w-full p-2 rounded-[30px] pl-3 outline-none text-[14px]"       
                required
              />
            </div>
            <div className="w-full flex-col flex gap-1">
              <label className="md:text-[20px]">Phone:</label>
              <input
                type="tel"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                className=" border-[1px] border-[#982293] h-[40px] md:h-[50px] w-full p-2 rounded-[30px] pl-3 outline-none text-[14px]"
                required
              />
            </div>
          </div>

          {/* Survey questions */}
          {currentQuestions.map((question) => (
            <div key={question.id} className="text-[15px] md:text-[18px] mt-[6px] md:mt-[10px]">
              <p>{question.question}</p>
              {question.type === "checkbox" && question.options ? (
                question.options.map((option) => (
                  <label key={option}>
                    <Controller
                      name={question.id}
                      control={control}
                      defaultValue={[]}
                      render={({ field }) => (
                        <input
                          type="checkbox"
                          value={option} 
                          className="text-[13px] mr-[4px] ml-[4px] w-[20px] h-[20px]" 
                          checked={field.value.includes(option)}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? [...field.value, option]
                              : field.value.filter((v: string) => v !== option);
                            setValue(question.id, newValue);
                          }}
                        />
                      )}
                    />
                    {option}
                  </label>
                ))
              ) : question.type === "radio" && question.options ? (
                question.options.map((option) => (
                  <label key={option}>
                    <Controller
                      name={question.id}
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <input type="radio" {...field} value={option} 
                        className="text-[13px] mr-[4px] ml-[4px]" required />
                      )}
                    />
                    {option}
                  </label>
                ))
              ) : (
                <Controller
                  name={question.id}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <textarea {...field} placeholder="Type your answer here..." className="w-full h-[150px] border-[#982293] border-[1px] outline-none rounded-md p-3 mt-[5px]" required />
                  )}
                />
              )}
            </div>
          ))}

          <div className="flex gap-4 items-center mt-[15px] mb-[30px] w-full justify-center">
            {page > 0 && (
              <button className="w-[100px] bg-[#982293] text-white outline-none border-none  md:w-[150px] md:text-[19px]" type="button" onClick={() => setPage(page - 1)}>
                Previous
              </button>
            )}
            {page < Math.ceil(Questions.length / 4) - 1 ? (
              <button className="w-[100px] md:w-[150px] md:text-[19px] bg-[#982293] text-white outline-none border-none" type="button" onClick={() => setPage(page + 1)}>
                Next
              </button>
            ) : (
            //    {loading ? 
            //     (<div><DatasIsaLoading /></div>) :
              <button className="w-[100px] md:w-[150px] md:text-[19px] bg-[#982293] text-white outline-none border-none" type="submit">{ loading ? <DatasIsaLoading />: "Submit"}</button>
            //   )}
            )}
          </div>
        </form>
      </div>
    </div>);
};

export default Surveys;

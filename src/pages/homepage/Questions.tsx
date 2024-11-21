import { Question } from "../../types/Interface";


const Questions: Question[] = [
    { id: "q1", type: "radio", question: "- What is your age group?", options: ["25-30", "31-40", "41-50", "51+"] },

    { id: "q2", type: "radio", question: "- What is your marital status?", options: ["Single", "Married", "Divorced", "Widowed"]  },

    { id: "q3", type: "radio", question: "- Do you have children?", options: ["Yes", "No"] },

    { id: "q4", type: "radio", question: "- What is your highest level of education?", options: ["Secondary School", "Tertiary Education", "Postgraduate", "Other"] },

    { id: "q5", type: "radio", question: "- How old is your teenager", options: ["13-15", "16-18", "19+"] },

    { id: "q6", type: "checkbox", question: "- What do you consider the most important area where your child needs support? (Choose all that apply)", options: ["Career guidance and counseling", "Improving academic performance", "Managing emotional and mental health", "Building life skills (e.g., time management, communication)", "Reducing distractions and improving focus", "Managing social media influence"]},

    { id: "q7", type: "checkbox", question: "- Have you noticed any of the following in your teenager in the last 6 months? (Select all that apply)", options: ["Lack of motivation", "Difficulty focusing or staying on task", "Emotional stress or mental health challenges", "Poor academic performance or lack of interest in schoolwork", "Difficulty making decisions about their future (career, education, etc.)", "Increased use of mobile phones and social media"]},

    { id: "q8", type: "checkbox", question: "- What concerns do you have about your child's future? (Select all that apply)", options: ["Lack of career direction or guidance", "Emotional well-being and mental health struggles", "Not prepared for future job opportunities", "Poor academic performance affecting their future", "Influence of social media and technology on their development"]},

    { id: "q9", type: "radio", question: "- What is the greatest obstacle your teenager faces in achieving their potential?", options: ["Lack of resources", "Poor time management", "Negative influences(social, peer presure)", "Academic Challenges", "Others"] },

    { id: "q10", type: "radio", question: "- What is your opinion on teenagers balancing academics with life skills training?", options: ["It is essential", "It is challenging but necessary", "It is a distraction from academics"] },

    { id: "q11", type: "radio", question: "- What mode of communication do you prefer for updates about the program?", options: ["Email", "SMS", "WhatsApp", "Phone call"] },

    { id: "q12", type: "radio", question: "- DevMe offers a 6-10 week offline readiness program designed to equip teenagers with life skills, academic support, emotional health guidance, and career development. After this offline phase, students transition to a personalized digital ecosystem that provides continuous learning, support, and mentorship. How interested would you be in enrolling your child in such a program?", options: ["Very Interested", "Interested", "Not Interested", "Not Sure"] },

    { id: "q13", type: "checkbox", question: "- Which aspects of our solution are most appealing to you? (Select all that apply)", options: ["The offline readiness program that addresses life skills and emotional health", "The transition to a personalized digital ecosystem for continued learning", "Career guidance and support through AI-powered mentorship", "Emotional health support and access to therapy and counseling", "Academic tutoring and personalized learning plans", "Connection with peers and mentors for social development"]},

    { id: "q14", type: "radio", question: "- How much are you willing to invest in this type of program for your child?", options: ["N50,000-N100,000", "N100,001-N200,000", "N200,001-N300,000", "N300,001-N400,000", "N400,001-N500,000", "Not sure/Prefer not to answer"] },

    { id: "q15", type: "checkbox", question: "- Do you think DevMe’s solution would address the challenges your teenager is facing? (Select all that apply)", options: ["Yes, it would help with career guidance", "Yes, it would improve my child’s academic performance", "Yes, it would help with emotional well-being", "Yes, it would help my child focus and reduce distractions", "No, I don’t think it would address these challenges", "Do you believe that integrating life skills, emotional well-being, and academic support into one comprehensive program is necessary for your teenager’s future success?"]},

    { id: "q16", type: "radio", question: "- Do you believe that integrating life skills, emotional well-being, and academic support into one comprehensive program is necessary for your teenager’s future success?", options: ["Yes, it’s essential for their growth and success", "Yes, but I’m not sure if this is the right solution", "No, I prefer focusing solely on academic support", "No, I don’t think all these areas are needed"] },

    { id: "q16", type: "radio", question: "- How important is it for the program to include therapy or counseling services?", options: ["Very Important", "Somewhat Important", "Not Important"] },


    { id: "q17", type: "radio", question: "- Does your child have a mobile phone they can use for digital learning and support?", options: ["Yes", "No", "Not Sure"] },

    { id: "q18", type: "radio", question: "- Has your child gained admission into a secondary school, university, or any other higher learning institution?", options: ["Yes, they have gained admission", "No, they are still in the application process", "No, they have not applied yet", "Not Sure"] },

    { id: "q19", type: "textarea", question: "- What is your biggest concern regarding your child's education and future?" },

    { id: "q20", type: "radio", question: "- Would you be open to a follow-up consultation to learn more about how DevMe can support your child’s development?", options: ["Yes", "No", "Maybe"] },

    // { id: "q4", type: "textarea", question: "- What is your biggest concern regarding your child's education and future?" },

    // Add 16 more questions here
  ];


  export default Questions
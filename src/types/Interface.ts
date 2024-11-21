

export interface Question {
    id: string;
    type: "radio" | "textarea" | "checkbox";
    question: string;
    options?: string[]; // For radio questions
  }
  
  export interface User {
    name: string;
    email: string;
    phone: string;
  }
  
  export interface SurveyResponse {
    user: User;
    responses: {
        questionId: string;
        answer: string | string[];
    }[];
  }
import axios from "axios";

const url="http://localhost:5000/questions";

export const fetchQuestions=()=>axios.get(url);
export const addQuestion=(newQuestion)=>axios.post(url,newQuestion);
export const updateQuestion=(id,updatedQuestion)=>axios.patch(`${url}/${id}`,updatedQuestion);
export const deleteQuestion=(id)=>axios.delete(`${url}/${id}`);
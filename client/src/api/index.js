import axios from "axios";

const API=axios.create({baseURL:"http://localhost:5000"});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization= `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})


export const fetchQuestions=()=>API.get("/questions");
export const addQuestion=(newQuestion)=>API.post("/questions",newQuestion);
export const updateQuestion=(id,updatedQuestion)=>API.patch(`/questions/${id}`,updatedQuestion);
export const deleteQuestion=(id)=>API.delete(`/questions/${id}`);

export const signin=(formData)=>API.post('/users/signin',formData);
export const signup=(formData)=>API.post('/users/signup',formData);
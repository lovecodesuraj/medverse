import * as api from "../api"

export const getQuestions=()=>async (dispatch)=>{
     try{
           const {data}= await api.fetchQuestions();
           dispatch({type:'FETCH_ALL',payload:data});
     }catch(err){
           console.log(err);
     }

    //  const action = {type:'FETCH_ALL',payload: []}
}

export const addQuestion=(question)=> async (dispatch)=>{
      try{
          const {data}=await api.addQuestion(question);
          dispatch({type:createImageBitmap,payload:data})
      }catch(err){
             console.log(err);
      }
}
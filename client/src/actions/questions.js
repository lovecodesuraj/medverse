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
          dispatch({type:"CREATE",payload:data})
      }catch(err){
             console.log(err);
      }
}
export const  getQuestionsBySearch=(searchQuery)=> async (dispatch)=>{
      try {  
            const {data:{data}}=await api.getQuestionsBySearch(searchQuery);
            console.log(data);
            dispatch({type:"SEARCH_QUESTIONS",payload:data});
      } catch (error) {
            console.log(error);
      }
} 

export const updateQuestion=(id,question)=>async (dispatch)=>{
      try{
        const {data} = await api.updateQuestion(id,question);
        dispatch({type:"UPDATE", payload:data});
      }catch(err){
            console.log(err);
      }
}

export const deleteQuestion=(id)=>async (dispatch)=>{
      try{
         await api.deleteQuestion(id);
         dispatch({type:"DELETE",payload:id});
      }catch(err){
            console.log(err);
      }
}


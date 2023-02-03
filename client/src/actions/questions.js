import * as api from "../api"

export const getQuestions = ({page}) => async (dispatch) => {
      try {
            dispatch({ type: "START_LOADING" })
            const { data } = await api.fetchQuestions(page);
            dispatch({ type: 'FETCH_ALL', payload: data });
            dispatch({ type: "END_LOADING" })
      } catch (err) {
            console.log(err);
      }

      //  const action = {type:'FETCH_ALL',payload: []}
}

export const addQuestion = (question) => async (dispatch) => {
      try {
            dispatch({ type: "START_LOADING" })
            const { data } = await api.addQuestion(question);
            dispatch({ type: "CREATE", payload: data })
            dispatch({ type: "END_LOADING" })
      } catch (err) {
            console.log(err);
      }
}
export const getQuestionsBySearch = (searchQuery) => async (dispatch) => {
      try {
            dispatch({ type: "START_LOADING" })
            const { data: { data } } = await api.getQuestionsBySearch(searchQuery);
            // console.log(data);
            dispatch({ type: "SEARCH_QUESTIONS", payload: data });
            dispatch({ type: "END_LOADING" })

      } catch (error) {
            console.log(error);
      }
}

export const updateQuestion = (id, question) => async (dispatch) => {
      try {
            const { data } = await api.updateQuestion(id, question);
            dispatch({ type: "UPDATE", payload: data });
      } catch (err) {
            console.log(err);
      }
}
export const getQuestion=(id)=>async (dispatch)=>{
      try {
            dispatch({ type: "START_LOADING" })
            const {data}=await api.fetchQuestion(id);
            dispatch({type:"FETCH_QUESTION", payload:data});
            dispatch({ type: "END_LOADING" })
               
      } catch (error) {
            console.log(error);
      }
}
export const deleteQuestion = (id) => async (dispatch) => {
      try {
            dispatch({ type: "START_LOADING" })
            await api.deleteQuestion(id);
            dispatch({ type: "DELETE", payload: id });
            dispatch({ type: "END_LOADING" })

      } catch (err) {
            console.log(err);
      }
}


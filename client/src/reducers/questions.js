export default (state={isLoading:true,questions:[]},action)=>{
    switch(action.type){
        case "START_LOADING" :
            return {
                ...state,
                isLoading:true
            }
        case "END_LOADING" :
            return {
                ...state,
                isLoading:false
            }

        case 'UPDATE' :
            return state.questions.map(question => question._id===action.payload._id ? action.payload : question);
        case  'FETCH_ALL':
            return {
            ...state,
            questions:action.payload.data,
            currentPage:action.payload.currentPage,
            noOfPages:action.payload.noOfPages,
            };
        case 'CREATE':
            return {...state,questions:[...state.questions,action.payload]};
        case 'DELETE' :
            return {...state,questions:state.questions.filter((question)=>question._id !== action.payload)};
        case 'Add_ANSWER':
            return state
        case 'SEARCH_QUESTIONS' :
            return {
                ...state,
                questions:action.payload,
            };
        case 'FETCH_QUESTION' :
            return {
                ...state,
                question:action.payload,
            };
        default :
          return state
    }
}
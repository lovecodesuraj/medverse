export default (questions=[],action)=>{
    switch(action.type){
        case 'UPDATE' :
            return questions.map(question => question._id===action.payload._id ? action.payload : question);
        case  'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...questions,action.payload];
        case 'DELETE' :
            return questions.filter((question)=>question._id !== action.payload);
        case 'Add_ANSWER':
            return questions
        case 'SEARCH_QUESTIONS' :
            return action.payload;
        default :
          return questions
    }
}
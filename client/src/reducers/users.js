export default (state={isLoading:true,users:[]},action)=>{
    switch (action.type) {
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
        case "GET_USERS" :
            return {...state,users:action.payload}
             case 'FETCH_QUESTION' :
            return {
                ...state,
                question:action.payload,
            };
        case 'FETCH_USER' :
            return {
                ...state,
                 user:action.payload,
            };    
        case "ADD_USER" :
            return {...state,users:[...state.users,action.payload]}
            default :
            return state
    }   
}
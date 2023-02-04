import * as api from "../api"

export const getUsers=()=> async (dispatch)=>{
    try {
        dispatch({ type: "START_LOADING" })
        const {data}=await api.getUsers();
        // console.log(data);
        dispatch({type:"GET_USERS",payload:data});
        dispatch({ type: "END_LOADING" })
    } catch (error) {
        console.log(error); 
    }
}
export const addUser=({newUser})=>async (dispatch)=>{
    try {
        dispatch({ type: "START_LOADING" })
        const {data}=await api.addUser(newUser);
        // console.log(data);
        dispatch({type:"ADD_USER",payload:data});
        dispatch({ type: "END_LOADING" })

    } catch (error) {
        
    }
}
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
export const getUser=(id)=>async (dispatch)=>{
    try {
          dispatch({ type: "START_LOADING" })
          const {data}=await api.fetchUser(id);
          console.log("user",data)
          dispatch({type:"FETCH_USER", payload:data});
          dispatch({ type: "END_LOADING" })
             
    } catch (error) {
          console.log(error);
    }
}
export const getMe=(id)=>async (dispatch)=>{
    try {
          dispatch({ type: "START_LOADING" })
          const {data}=await api.fetchUser(id);
          dispatch({type:"ME", payload:data});
          dispatch({ type: "END_LOADING" })
             
    } catch (error) {
          console.log(error);
    }
}
export const editProfile=({_id,picture,about})=>async (dispatch)=>{
    try {
          dispatch({ type: "START_LOADING" })
          const {data}=await api.editProfile({_id,picture,about});
          dispatch({type:"ME", payload:data});
          dispatch({ type: "END_LOADING" })
             
    } catch (error) {
          console.log(error);
    }
}

export const getUsersBySearch=(searchQuery)=> async (dispatch)=>{
    try {
        dispatch({ type: "START_LOADING" })
        const {data}=await api.getUsersBySearch(searchQuery);
        console.log(data);
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
        console.log(error);
    }
}
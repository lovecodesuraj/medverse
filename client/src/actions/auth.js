import * as api from "../api/index"

export const signup=(formData,navigate)=>async (dispatch)=>{
   try {
      //log in the user
      const {data}=await api.signup(formData);
      console.log("data : ",data);
      dispatch({type:"AUTH",data});
      navigate("/");
   } catch (error) {
       console.log(error);
   }
} 
export const signin=(formData,navigate)=>async (dispatch)=>{
  try {
    //...
    dispatch({ type: "START_LOADING" })
    const {data}=await api.signin(formData);
    dispatch({ type: "END_LOADING" })
    if(data.message){
      dispatch({type:"AUTH_ERROR_MESSAGE",message:data.message})
    }else{
      dispatch({type:"AUTH",data});
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
}
export const googleAuth=(formData,navigate)=>async (dispatch)=>{
  try {
    console.log("formdata =>" ,formData);
    const {data}=await api.googleAuth(formData);
    dispatch({type:"AUTH",data});
    navigate("/");
  } catch (error) {
    console.log(error);
  }
}


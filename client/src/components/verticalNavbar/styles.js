import { makeStyles } from "@material-ui/core";
export default makeStyles(()=>({
    toolBar:{
        width:"15vw",
        display:"flex",
        flexDirection:"column",
    },
    paper:{
        width:"100%",
        display:"flex",
        alignItems:"center",
        padding:"10px",
        margin:"3px 0 3px 0"
    },
    item:{
       textDecoration:"none",
       fontFamily:"sans-serif",
       margin:"0 0 0 10px",
       textTransform:"capitalize",
       color:"#0C0D0E",
       letterSpacing:"1px",
    //    width:"100%",
        // height:"40px",  
        // display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
    }
}))
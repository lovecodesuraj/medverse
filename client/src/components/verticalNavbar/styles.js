import { makeStyles } from "@mui/styles";
export default makeStyles(()=>({
    toolBar:{
        height:"90vh",
    },
    item:{
        width:"91%",
        display:"flex",
        alignItems:"center",
        padding:"10px",
        // marginLeft:"10px",
        gap:"10px",
       textDecoration:"none",
       fontFamily:"sans-serif",
       textTransform:"capitalize",
       color:"#0C0D0E",
       letterSpacing:"1px",
       '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.1)',
      },
    
    },
    active:{
        backgroundColor:"#F1F2F3",
        borderRight:"2px solid grey",
    }
}))
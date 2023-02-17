import { makeStyles } from "@material-ui/core";
// import noResultFound from "./noResultsFound.jpg"
export default makeStyles(()=>({
    mainContainer:{

    },
    searchButton:{
    //    display:"flex",
       width:"20px",
       height:"55px",
       
    },
    users:{
        alignItems:"flex-start",
        display:"flex",
        gap:"10px",
        flexWrap:"wrap",
    },
    paper:{
        display:"flex",
        padding:"10px",
        width:"18vw",
    },
    picture:{
       width:"70px",
       height:"70px",
       margin:"0 10px 0 0"
    },
    name:{
        fontSize:"15px",
        color:"rgb(0, 116, 204)",
        fontFamily:"sans-serif",
        fontWeight:"600",
        lineHeight:"25px",
        cursor:"pointer",
    },
    email:{
        color:"rgb(106, 115, 124)",
        fontSize:"12px",
        fontFamily:"verdana",
        lineHeight:"16px",
    },
    noUsers:{
        // backgroundImage:`url(${noResultFound})`,
        // backgroundSize:"cover",
        // backgroundPosition:"center",
        display:'flex',
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        width:"100%",
        height:"60vh",
      },
}))
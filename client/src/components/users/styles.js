import { makeStyles } from "@material-ui/core";
export default makeStyles(()=>({
    mainContainer:{
        // border:"1px solid grey",
        width:"62vw",
        alignItems:"flex-start",
        justifyContent:"center",
        // padding:"20px",
        // height:"80vh",
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
    },
    email:{
        color:"rgb(106, 115, 124)",
        fontSize:"12px",
        fontFamily:"verdana",
        lineHeight:"16px",
    }
}))
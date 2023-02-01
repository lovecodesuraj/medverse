import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';


export default makeStyles((theme)=>({
  questionWrapper:{
    // backgroundColor:"grey",
    borderBottom:"0.5px solid #CBCFD3",
      display:"flex",
      // padding:"10px",
      width:"100%",
      height:"20vh",
      // gap:"3",
      // margin:"0",
      justifyContent:"center",
      alignItems:"center",
      // borderBottom:"0.2px solid grey",
      // borderTop:"0.2px solid grey",
  },
  status:{
    // width:"10vw",
    width:"15%",
    height:"80%",
    // backgroundColor:"yellow",
    display:"flex",
    flexDirection:"column",
    textTransform:"lowercase",
    // width:"10vw",
    margin:"0 20px 0 0"
    // backgroundColor:"yellow"
  },
  statusElement:{
    textAlign:"right",
    fontSize:'13px',
    color:"rgb(12, 13, 14)",
    fontFamily:"verdana",
    // margin:"5px 0 0 0"

  },
  question:{
    width:"75%",
    height:"80%",
    // backgroundColor:"purple"
    // width:"50vw"
  },
  title:{
  color:"rgb(10, 149, 255)",
  fontSize:"17px",
  lineHeight:"22.23px",
  },
  tags:{
    margin:"5px 0 0 0",
    // border:"1px solid black",
    display:"flex",
    justifyContent:"space-between"
    // alignItems:'space-between'
  },
  details:{
   fontSize:"13px",
  },
  span:{
    backgroundColor:"#D0E3F1",
    fontSize:"12px",
    color:"rgb(57, 115, 157)",
    padding:"5px 4px",
    borderRadius:"5px",
    margin:"0 2px"
  },
    userAndDate:{ 
    },
    userAndDate :{
      // borderColor:"grey",
      // alignSelf:"flex-end",
      display:"flex",

      justifyContent:"center",
      alignItems:"center",
      // backgroundColor:"yellow",
      // float:"right"
      // placeSelf:"right"
      // justifySelf:"right"
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
      height:"20px",
      width:"20px"
    },
    name:{
      fontSize:"10px",
      color:"rgb(57, 115, 157)",
      padding:"5px 4px",
      borderRadius:"5px",
      margin:"0 3px"
    },

}));

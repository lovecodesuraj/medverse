import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';


export default makeStyles((theme)=>({
  loadingPaper:{
    height:"90vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  questionWrapper:{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center",
      padding:"0 30px"
  },
  status:{
    width:"100%",
    padding:"10px",
    display:"flex",
    textTransform:"lowercase",
    // margin:"0 20px 0 0"
  },
  statusElement:{
    // textAlign:"right",
    fontSize:'13px',
    color:"rgb(12, 13, 14)",
    fontFamily:"verdana",
    display:"flex",
    gap:"5px",
    margin:"0  20px 0 0",
    padding:'5px 0',
    justifyContent:"flex-end",
    alignItems:"center",
    cursor:"pointer",

  },
  question:{
    width:"100%",
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
    userAndDate :{
      width:"100%",
      display:"flex",
      justifyContent:"flex-end",
      alignItems:"center",
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
      margin:"0 3px",
      cursor:"pointer"
    },
    files:{
      padding:"10px 0",
      display:"flex",
      gap:"5px",
      width:"100%",
    },
    file:{
      width:"80px",
      height:"80px",
      backgroundSize:"cover",
      backgroundPosition:"center",
    },
    answers:{
   width:"100%",
  //  margin:"20px 0",
    },
    answer:{
     padding:"10px",
     margin:"5px 0"
    },
    answerDetails:{
      display:"flex",
      justifyContent:"flex-end",
      alignItems:"center",
    },
    addAnswer:{
      // width:"100",
    },
    fileInput: {
      width: '97%',
      margin: '10px 0',
    },
    buttonSubmit: {
      marginBottom: 10,
    },
}));

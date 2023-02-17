
import noResultFound from "./noResultsFound.jpg"
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer:{
    // backgroundColor:"grey",
    display:"flex",
  },
  questionsWrapper:{
    padding:"20px",
    width:"45vw",
    border:"0.5px solid #CBCFD3"
  },
  questions:{
    width:"100%",
    height:"100vh",
    overflowY:"auto",
  },
  header:{
    position:"sticky",
     height:"15vh",
     width:"100%",
      display:"flex",
     flexDirection:"column",
     justifyContent:"space-between",
     padding:"0 0 10px 0",
     borderBottom:"0.5px solid #CBCFD3"
  },
  upperHeader:{
    display:"flex",
    justifyContent:"space-between"
    // flexDirection:"row"
  },
  askButton:{
    //  justifySelf:"flex-end"
    fontSize:"13px",
    textTransform:"capitalize"
  },
  lowerHeader:{
    display:"flex",
    justifyContent:"space-between"
    
  },
  sortingButtons :{
    color:"rgb(82, 89, 96)",
    fontSize:"12px",
    // margin:"2px",
  },
  sortingButton :{
    fontSize:"12px",
    border:"1px solid #CBCFD3",
    borderRadius:"0",

    // border:"1px solid ",
  },
  active : {
    backgroundColor:"#E3E6E8",
    fontSize:"12px",
    border:"1px solid #CBCFD3",
    borderRadius:"0",
  },
  sortedBy:{
    fontSize:"27px",
    textTransform:"capitalize",
    fontFamily:"sans-serif"
  },
  questions:{
  },
  noQuestions:{
    backgroundImage:`url(${noResultFound})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    width:"100%",
    height:"50vh",
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  
}));

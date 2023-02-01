
import noResultFound from "./noResultsFound.jpg"
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap:"wrap",

    flexDirection:"column"
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  questionsWrapper:{
    //  height:"20vh",
    padding:"20px",
    width:"45vw",
    border:"0.5px solid #CBCFD3"
  },
  questions:{
    width:"100%"
  },
  header:{
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
  },
  sortedBy:{
    fontSize:"27px",
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
    // display:'flex',
    // alignItems:"center",
    // justifyContent:"center",
    // fontFamily:"sans-serif"
    // textAlign:"center",
    // textJustify:"center",
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
}));

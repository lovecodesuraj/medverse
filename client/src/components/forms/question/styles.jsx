
import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },

  },
  ask:{
    display:"flex",
    flexDirection:"column",
    width:"55vw",
    // padding :"0 20px",
  },
  heading:{
    fontSize:"27px",
    fontWeight:"700",
    fontFamily:"BlinkMacSystemFont",
    padding:"0 20px"
  },
  stepsToAskQuestion:{
    backgroundColor:"#EBF4FB",
    padding:"0 20px"
  },

  paper: {
    padding: theme.spacing(2),
    // position:"fixed",
    top:'100'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));

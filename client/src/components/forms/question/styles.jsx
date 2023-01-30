
import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },

  },
  ask:{
    display:"flex",
    flexDirection:"column",
    width:"55vw"
  },
  heading:{
    fontSize:"27px",
    fontWeight:"700",
    fontFamily:"BlinkMacSystemFont",
  },
  stepsToAskQuestion:{
    backgroundColor:"#EBF4FB",
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

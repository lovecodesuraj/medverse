import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  app:{
    
  },
  main:{
    display:"flex",
    // backgroundColor:"grey",
   position:"relative",
   left:"7.3vw",
   top:"-25vh",
  //  minHeight:"85vh",
  //  margin:"0 0 -25vh 0",
  marginBottom:"-25vh",
  },

  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));

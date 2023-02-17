import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  app:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    
  },
  main:{
  //  maxHeight:"90vh",
  //  backgroundColor:"grey",
  },
  verticalNavbar:{
    height:"90vh",
    position:"sticky",
    top:"14.5vh",
  },
  routes:{
  // overflowY:"auto",
  // height:"90vh",
  // backgroundColor:"grey",
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
  rightBar:{
    // backgroundColor:"grey"
    // boxShadow:"-3px -3px 3px  rgba(0,0,0,0.1)"
    height:"90vh",
    position:"sticky",
    top:"14.5vh",
  }
}));

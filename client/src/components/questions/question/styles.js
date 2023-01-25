import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    // height: '100%',
    position: 'relative',
    width:"48vw"
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  question:{
    fontSize:"16px",
    // fontWeight:"100",
    lineHeight:"22.5px",
    // color:"green"
    color:"rgb(35, 38, 41)",
  },
  files:{
     display:"flex",
     maxWidth:"100%",
     overflowX:"auto",
    //  scrollbarWidth:"0"
  },
  showFiles:{
  //  width:'80vw',
  //  maxHeight:"80vh",
    //  overflowX:"auto",
  //  position:'absolute',
  //  display:"flex",
  //  flexDirection:"row",
  //  flexWrap:"wrap",
  //  left:"0",
  //  top:'0'

  },
  answer:{
    background:"linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.05))",
    borderRadius:"5px",
    margin:"4px 2px",
  },
  file:{
     minWidth:"100px",
     minHeight:"100px",
     margin:"2px",
  },
  ansFile:{
     minWidth:"80px",
     minHeight:"80px",
     margin:"2px",
  },
  showfile:{
    width:'800px',
    height:"1200px",
    margin:"2px 0",
    display:"inline-block"
  },
  showAnsFile:{
    width:'800px',
    height:"1200px",
    margin:"2px 0",
    display:"inline-block"
  }
});

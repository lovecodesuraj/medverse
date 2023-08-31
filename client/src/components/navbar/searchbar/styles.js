import { makeStyles } from "@mui/styles";

export default makeStyles(()=>({
    appBarSearch: {
      display:"flex",
      flexDirection:"row",
        // borderRadius: 4,
        // marginBottom: '1rem',
        margin:"0 40px",
        width:"400px",
        // height:"30px",
        display: 'flex',
        borderRadius:"5px 0 0 5px"
        // padding: '16px',
      },
      searchButton:{
        borderRadius:"0 5px 5px 0"
      }
}))

import {Link} from "react-router-dom";
import React from 'react'
import {Pagination,PaginationItem} from "@material-ui/lab"
import useStyles from "./styles"
const Pagination = () => {
    const classes=useStyles();
  return (
         <Pagination
          classes={{ul:classes.ul}}
          count={5}
          page={1}
          variant="outlined"    
          renderItem={(item)=>(
             <PaginationItem {...item} component={Link}  to={`/questions?page=${1}`} /> 
          )} 
         />
  )
}

export default Pagination
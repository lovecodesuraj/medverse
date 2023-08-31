
import {Link} from "react-router-dom";
import React, { useEffect } from 'react'
import {Pagination,PaginationItem} from "@mui/material"
import useStyles from "./styles"
import { useDispatch ,useSelector} from "react-redux";
import { getQuestions } from "../../actions/questions";
const Paginate =  ({page}) => {
  const dispatch=useDispatch();
  const {numberOfPages}=useSelector((state)=>state.questions);
    const classes=useStyles();
    useEffect(()=>{
      if(page) dispatch(getQuestions(page));
    },[page])
  return (
         <Pagination
          classes={{ul:classes.ul}}
          count={numberOfPages}
          page={Number(page) || 1 }
          variant="outlined"    
          renderItem={(item)=>(
             <PaginationItem {...item} component={Link}  to={`/questions?page=${item.page}`} /> 
          )} 
         />
  )
}

export default Paginate
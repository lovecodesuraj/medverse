import React, { useState } from 'react'
import { AppBar,TextField,Button,Paper } from '@material-ui/core'
import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import ChipInput from "material-ui-chip-input";
import useStyles from "./styles"
import { getQuestions, getQuestionsBySearch } from '../../../actions/questions';

// const useQuery(){
//     return new URLSearchParams(useLocation().search);
// }

const SearchBar = () => {
    const [search,setSearch]=useState("");
    const [tags,setTags]=useState([]);

    const navigate=useNavigate();
    const classes=useStyles();
    const dispatch=useDispatch();
    const handleKeyPress=(e)=>{
       if(e.keyCode===13){
         searchQuestions();
       }
    }
    const searchQuestions=()=>{
        // e.preventDefault();
        if(search.trim() || tags){
            // console.log("ewqjkuf gb")
            dispatch(getQuestionsBySearch({search,tags:tags.join(',')}));
        }else{
        navigate("/questions");
        }
    }

    const onDelete=(tagToDelete)=>{setTags(tags.filter(tag=>tag!==tagToDelete))} ;
    const onAdd=(tag)=>{setTags([...tags,tag])};
    // const query=useQuery();
  return (
    <AppBar position="static" color='inherit'  className={classes.appBarSearch}>
      <TextField 
      name="search" 
      variant='outlined' 
      onChange={(e)=>setSearch(e.target.value)}  
      label="Search" 
      fullWidth 
      value={search}
      onKeyPress={handleKeyPress}
      />
      <ChipInput 
       styles={{margin:"10px 0"}}
       value={tags}
       onAdd={onAdd}
       onDelete={onDelete}
       label="Search Tags"
       variant='outlined'
      />
      <Button onClick={searchQuestions} variant="contained" className={classes.searchButton} color="primary"   >Search</Button>
    </AppBar>
  ) 
}

export default SearchBar
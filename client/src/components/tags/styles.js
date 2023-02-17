import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({

    mainContainer: {
      
    },
    searchButton: {
        
        width: "20px",
        height: "55px",

    },
    suggestions: {
        border: "2px solid grey"
    },

    tagButton: {
        margin: "10px",
        fontSize: "12px",
        textTransform: "lowercase",
    },
    questionsWrapper: {
        padding: "20px",
        width: "45vw",
        // border: "0.5px solid #CBCFD3"
    },
    loading: {
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    noResults:{
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
   
}));
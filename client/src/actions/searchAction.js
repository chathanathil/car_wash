import axios from 'axios';
import { SEARCH_CAR,GET_ERRORS,SET_SEARCH_NULL} from "./types";

// Set main search null:
export const setSearchNull=()=>dispatch=>{
    dispatch({
        type:SET_SEARCH_NULL
    });
}


// Search function
export const carSearch=query=>dispatch=>{
    axios.get(`/api/search/${query}`)
         .then(res=>{
             dispatch({
                 type:SEARCH_CAR,
                 payload:res.data
             });
         })
         .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
            })
}
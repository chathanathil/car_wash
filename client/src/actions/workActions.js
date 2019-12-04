import axios from 'axios';

import {GET_WORK,WORK_LOADING,GET_ERRORS, CLEAR_CURRENT_WORK} from './types';
import { dispatch } from 'rxjs/internal/observable/range';

// Get current work
export const getCurrentWork=()=>dispatch=>{
    dispatch(setWorkLoading());
    axios.get('/api/work')
         .then(res=>
            dispatch({
                type:GET_WORK,
                payload:res.data
            })
            )
        .catch(err=>
            dispatch({
                type:GET_WORK,
                payload:{}
            })
            );
}

// Create Work
export const createWork=(workData,history)=>dispatch=>{
    axios.post('/api/work',workData)
        .then(res=>history.push('/home'))
        .catch(err=>
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data

            })
            )
}
 

// Work loading
export const setWorkLoading=()=>{
    return{
        type:WORK_LOADING
    }
}

// Clear work
export const clearCurrentWork=()=>{
    return {
        type:CLEAR_CURRENT_WORK
    }
}
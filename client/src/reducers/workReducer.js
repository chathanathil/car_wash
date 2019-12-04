import {GET_WORK,WORK_LOADING, CLEAR_CURRENT_WORK} from '../actions/types';

const initialState={
    work:null,
    works:null,
    loading:false
};

export default function(state=initialState,action){
    switch(action.type){
        case WORK_LOADING:
            return{
                ...state,
                loading:true
            };
        case GET_WORK:
            return{
                ...state,
                work:action.payload,
                loading:false
            }
        case CLEAR_CURRENT_WORK:
            return{
                ...state,
                work:null
            }
        default:
            return state;
    }
}
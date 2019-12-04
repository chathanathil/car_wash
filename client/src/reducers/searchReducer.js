import { SEARCH_CAR,SET_SEARCH_NULL} from "../actions/types";

const initialState={
    car:null,
    
}

export default function(state=initialState,action){
    switch(action.type){
        case SEARCH_CAR:
            return{
                ...state,
                car:action.payload
            };

        case SET_SEARCH_NULL:
            return{
                ...state,
                car:null
            }

        default:
          return state;
    }
}
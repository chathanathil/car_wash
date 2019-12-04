import {combineReducers} from 'redux';
import authReducer from './authReducer';
import  workReducer from './workReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    auth:authReducer,
    work:workReducer,
    search:searchReducer
})
import {combineReducers} from 'redux';
import UserReducer from './user-login'

const allReducers = combineReducers({
    
    user: UserReducer
});

export default allReducers;
import {combineReducers} from 'redux';
import {listReducer} from './listReducer'
export const rootReducer = combineReducers(
    {
        items:listReducer
    }
    )
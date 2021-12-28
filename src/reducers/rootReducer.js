import {combineReducers } from 'redux';

import {toDoAppReducer} from './toDoAppReducer'

export const rootReducer = combineReducers({
    project1: toDoAppReducer,
})
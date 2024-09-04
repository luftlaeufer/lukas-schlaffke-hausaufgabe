import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './userReducer'

const appReducerList = {
  user: userReducer,
}

const appReducer = combineReducers(appReducerList)

export default appReducer

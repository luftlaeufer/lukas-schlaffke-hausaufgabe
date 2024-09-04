import userReducer from '@/store/userReducer'
import { combineReducers } from '@reduxjs/toolkit'

const appReducerList = {
  user: userReducer,
}

const appReducer = combineReducers(appReducerList)

export default appReducer

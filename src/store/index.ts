import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import { useDispatch, useSelector } from 'react-redux'

const appReducerList = {
  user: userReducer,
}

const appReducer = combineReducers(appReducerList)

const reducer = {
  app: appReducer
}

const store = configureStore({reducer})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store

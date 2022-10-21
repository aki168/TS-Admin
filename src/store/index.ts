import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import promiseMiddleware from 'redux-promise'

import appReducer from './slicers/appSlicer'

//slicer



const reducer = combineReducers({
  // tab: ,
  // user: ,
  app: appReducer
})



const persistConfig = {
  key: 'root',
  storage
}


const persistedReducer = persistReducer(persistConfig, reducer)

// create module
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat([promiseMiddleware])
  )
})



export const persistot = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

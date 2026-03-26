import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  userInfo from './userSlice'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'


const rootReducer = combineReducers({
    user:userInfo,

})

const persistConfig = {
    key:"root",
    storage
}

const persistedReducers = persistReducer(persistConfig,rootReducer)

export const  store = configureStore({
    reducer:persistedReducers,
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serializableCheck:false
    })
})


export const persistor = persistStore(store)
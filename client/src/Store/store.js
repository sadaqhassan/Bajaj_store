import { configureStore } from '@reduxjs/toolkit'
import  userInfo from './userSlice'

export const  store = configureStore({
    reducer:{
        user:userInfo
    }
})
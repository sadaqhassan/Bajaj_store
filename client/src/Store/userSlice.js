import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        userLogin:(state,action)=>{
            state.currentUser = action.payload.userData
        },
        userLogout:(state,action)=>{
            state.currentUser = null
        }
    }
})



export const { userLogin,userLogout } = userSlice.actions

export default userSlice.reducer
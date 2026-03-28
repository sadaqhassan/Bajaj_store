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
        userLogout:(state)=>{
            state.currentUser = null
        },
        imageUploading:(state,action)=>{
            if(state.currentUser){
                state.currentUser.avatar = action.payload
            }
        }
    }
})



export const { userLogin,userLogout,imageUploading } = userSlice.actions

export default userSlice.reducer
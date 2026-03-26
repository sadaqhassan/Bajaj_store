import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        userData:(state,action)=>{
            state.currentUser = action.payload.userData
        }
    }
})



export const { userData } = userSlice.actions

export default userSlice.reducer
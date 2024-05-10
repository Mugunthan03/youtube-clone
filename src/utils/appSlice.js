import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        open:true,

    },
    reducers:{
        toggleSideBar:(state)=>{
            state.open = !state.open
        }
    }


})

export const {toggleSideBar} = appSlice.actions
export default appSlice.reducer
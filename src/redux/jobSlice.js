import { createSlice } from "@reduxjs/toolkit";


const initialState={
    jobs :[]
}

const jobSlice = createSlice({
    name:"jobSlice",
    initialState,
    reducer:{
        setJob:(state,action)=>{
            state.jobs = action.payload
        }
    }
})

export const {setJob}= jobSlice.actions
export default jobSlice.reducer


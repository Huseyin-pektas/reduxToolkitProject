import { createSlice } from "@reduxjs/toolkit";


const initialState={
    jobs :[],
    initialized:false
}

const jobSlice = createSlice({
    name:"jobSlice",
    initialState,
    reducers:{
        setJob:(state,action)=>{
            state.jobs = action.payload
            //  burada usestateile gelen res.data yı alıyoruz.
            console.log(action.payload)
            state.initialized = true
        }
    }
})

export const {setJob} = jobSlice.actions
export default jobSlice.reducer


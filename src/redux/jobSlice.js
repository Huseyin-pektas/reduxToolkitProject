import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    jobs: [],
    filteredJobs: [],
    initialized: false
}

const jobSlice = createSlice({
    name: "jobSlice",
    initialState,
    reducers: {
        setJob: (state, action) => {
            state.jobs = action.payload
            //  burada usestateile gelen res.data yı alıyoruz.
            // console.log(action.payload)
            state.initialized = true
            state.filteredJobs = action.payload
        },
        handleInputChange: (state, action) => {
            // burada yeni dizi oluşturacağım
          const filteredByQuery =  state.jobs.filter((item)=>{
            // burası inputa yazılan değer
               const query = action.payload.toLowerCase()
            //    burası var olan şirket ismi
             const selectedJob =  item.position.toLowerCase()
            //   burada döndürdük
             return selectedJob.includes(query)
            })
            // burada yeni filter dzisini boş olan filtredJobs dizisne atadık
            state.filteredJobs = filteredByQuery
            // console.log(action.payload)
        },
        handleStatusChange: (state, action) => {
           const filteredByStatus =  state.jobs.filter((job)=> job.status=== action.payload)
            // console.log(action.payload)
            state.filteredJobs = filteredByStatus
        },

        handleSortChange: (state, action) => {

            switch (action.payload) {
                case "a-z":
                    state.filteredJobs.sort((a,b)=>{
                        if(a.company < b.company) return -1;
                        if(a.company > b.company) return 1;
                        return 0;
                    })
                    break;
                case "z-a":
                    state.filteredJobs.sort((a,b)=>{
                        if(a.company < b.company) return 1;
                        if(a.company > b.company) return -1;
                        return 0;
                    })
                    break;
                case "Önce-Yeni":
                    state.filteredJobs.sort((a, b) => new Date(b.date) - new Date(a.date));

                    break;
                case "Önce-Eski":
                    state.filteredJobs.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse()

                    break;
            
                default:
                    break;
            }
            console.log(action.payload)
          
        },
        handleReset: (state) => {
            state.filteredJobs = state.jobs
        }
    }
})

export const {
    setJob,
    handleInputChange,
    handleStatusChange,
    handleSortChange,
    handleReset
} = jobSlice.actions
export default jobSlice.reducer


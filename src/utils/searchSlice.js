import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchResults",
    initialState:[],
    reducers:{
        setSearchVideos:(state,action)=>{
            console.log(action.payload,'payload')
            return [...action.payload];   
        }
    }
})

export const {setSearchVideos} = searchSlice.actions;
export default searchSlice.reducer;
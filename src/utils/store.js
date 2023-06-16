import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import suggestionsSlice from "./suggestionsSlice";
import searchSlice from "./searchSlice";


const store = configureStore({
  reducer:{
    app:appSlice,
    suggestions:suggestionsSlice,
    searchResults:searchSlice
  }
})

export default store
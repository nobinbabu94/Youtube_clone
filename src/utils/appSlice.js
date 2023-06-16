import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name:"app",
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        togleMenu : (state)=> {
           console.log(state.isMenuOpen,'menu open')
            state.isMenuOpen = !state.isMenuOpen
       
        }, 
        closeMenu : (state)=>{
            state.isMenuOpen = false
        },
        openMenu : (state)=>{
            state.isMenuOpen = true
        },
    }
})

export const { togleMenu,closeMenu,openMenu } = appSlice.actions;

export default appSlice.reducer;
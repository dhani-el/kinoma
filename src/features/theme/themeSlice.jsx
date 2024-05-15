

import { createSlice } from "@reduxjs/toolkit";
import { themeConstants } from "../../utils/constants";




const initialState = {
    value:themeConstants.LIGHT,
}

export const themeSlice = createSlice({
    name:"ThemeSlice",
    initialState:initialState,
    reducers:{
        lightMode:(state)=>{
            state.value = themeConstants.LIGHT
        },
        darkMode:(state)=>{
            state.value = themeConstants.DARK
        }
    }
})


export const {lightMode,darkMode} = themeSlice.actions;
export default themeSlice.reducer;
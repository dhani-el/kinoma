

import { configureStore } from "@reduxjs/toolkit";
import themSliceReducer from "./features/theme/themeSlice"

export const store  = configureStore({
    reducer:{
        themeReducer : themSliceReducer
    }
})
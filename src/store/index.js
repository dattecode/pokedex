import { configureStore } from "@reduxjs/toolkit";
import trainesSlice from "./slices/traines.slice";


export default configureStore({
    reducer: {
        trainer: trainesSlice
    }
})
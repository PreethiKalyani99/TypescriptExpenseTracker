import { configureStore } from "@reduxjs/toolkit";
import expenseTrackerSlice from "./expenseTrackerSlice";

export const store = configureStore({
    reducer: {
        expenseTracker: expenseTrackerSlice 
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
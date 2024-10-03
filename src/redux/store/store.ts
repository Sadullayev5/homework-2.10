import { configureStore } from "@reduxjs/toolkit";
import likeSlice from "../slice/likeSlice"

const store = configureStore({
    reducer: {
        like : likeSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 

export {store}
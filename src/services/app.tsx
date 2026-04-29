import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: localStorage.getItem("curPage") ?? "Home"
}

export const appSlice = createSlice({
    name: "AppSlice",
    initialState,
    reducers: {
        setPage(state, action )  {
            state.currentPage = action.payload;  
            localStorage.setItem("curPage", action.payload)
        },
    }

})

export const {setPage} = appSlice.actions;
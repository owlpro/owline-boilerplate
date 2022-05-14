import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from 'redux';
import { languages } from "./data";
import { MainInitialState } from "./interfaces";



const initialState: MainInitialState = {
    language: languages[0]
}
export const MainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        set_language: (state, action) => {
            state.language = languages.find(l => l.key === action.payload) || languages[0]
        }
    },

})

export const { set_language } = MainSlice.actions
export default MainSlice.reducer as Reducer<typeof initialState>
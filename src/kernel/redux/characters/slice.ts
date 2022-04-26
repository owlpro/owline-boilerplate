import { createSlice } from '@reduxjs/toolkit';
import { Reducer } from 'redux';
import { getCharactersAsync } from './api';
import { CharacterInitState } from "./interfaces";
const initState: CharacterInitState = {
    get: {
        process: false,
        data: [],
        pagination: {
            count: 0,
            pages: 0,
        }
    },
}



export const characterSlice = createSlice({
    name: 'character',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: initState,
    reducers: {
        set_get_process: (state) => {
            state.get.process = true;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getCharactersAsync.pending, (state, action) => {
                state.get.process = true;
            })
            .addCase(getCharactersAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                state.get.process = false;
                state.get.data = action.payload.results;
                state.get.pagination = action.payload.info;
            })
            .addCase(getCharactersAsync.rejected, (state, action) => {
                state.get.process = false;
            })
    }
})

export const { set_get_process } = characterSlice.actions

export default characterSlice.reducer as Reducer<typeof initState>
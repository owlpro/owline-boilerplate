import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "kernel/utils/axios";
import { CharacterFailedResponse, CharacterSuccessResponse } from "./interfaces";


export const getCharactersAsync = createAsyncThunk<CharacterSuccessResponse, void, { rejectValue: CharacterFailedResponse }>(
    'character/get',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character')
            return response?.data
        } catch (error: any) {
            return rejectWithValue(error.response?.data)
        }
    }
)
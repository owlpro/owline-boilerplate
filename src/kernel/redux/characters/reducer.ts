import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../types';
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


// Define a type for the slice state
interface CounterState {
    value: number
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: State) => state.counter.value

export default counterSlice.reducer
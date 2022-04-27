import {
    Action, configureStore, ThunkAction
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import CharacterSlice from "./characters/slice";



export const makeStore = () =>
    configureStore({
        reducer: {
            character: CharacterSlice
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
    });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const wrapper = createWrapper(makeStore, { debug: true });


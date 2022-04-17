import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { store } from "./storage";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type State = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type Dispatcher = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, Action<string>>;
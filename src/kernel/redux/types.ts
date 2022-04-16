import { store } from "./storage"

// Infer the `RootState` and `AppDispatch` types from the store itself
export type State = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type Dispatcher = typeof store.dispatch
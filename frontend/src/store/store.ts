import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import orderItemReducer from './orderItemSlice';
import orderReducer from './orderSlice';
import productReducer from './productSlice';
import reviewReducer from './reviewSlice';
import userAuthReducer from './userAuthSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    orderItems: orderItemReducer,
    orders: orderReducer,
    products: productReducer,
    reviews: reviewReducer,
    userAuth: userAuthReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
